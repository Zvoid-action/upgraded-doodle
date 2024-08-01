function Line(options) {
  this.id = options.id;
  this.startNode = null;
  this.endNode = null;
  this.startPoint = [];
  this.endPoint = [];
  this.focus = false;
}
Line.prototype.draw = function (callback) {
  ctx.beginPath();
  ctx.fillStyle = "#ff6b6b";
  ctx.moveTo(...this.startPoint);
  ctx.lineTo(...this.endPoint);
  ctx.lineWidth = 2;
  if (this.focus) {
    ctx.strokeStyle = "#ff6b6b";
  } else {
    ctx.strokeStyle = "#000";
  }
  ctx.stroke();
  ctx.closePath();
  if (callback) {
    callback(this);
  }
};

Line.prototype.setPoint = function () {
  this.startPoint = [];
  this.endPoint = [];
  // console.log(this.startNode, this.endNode);
  let start = rootNode.getNode(this.startNode);
  let end = rootNode.getNode(this.endNode);

  this.startPoint.push(start.x);
  this.startPoint.push(start.y);
  this.endPoint.push(end.x);
  this.endPoint.push(end.y);
  // console.log(this.startPoint, this.endPoint);
  switch (this.startDirect) {
    case "up":
      this.startPoint[1] -= start.maxRadius;
      break;
    case "right":
      this.startPoint[0] += start.maxRadius;
      break;
    case "down":
      this.startPoint[1] += start.maxRadius;
      break;
    case "left":
      this.startPoint[0] -= start.maxRadius;
      break;
  }
  switch (this.endDirect) {
    case "up":
      this.endPoint[1] -= end.maxRadius;
      break;
    case "right":
      this.endPoint[0] += end.maxRadius;
      break;
    case "down":
      this.endPoint[1] += end.maxRadius;
      break;
    case "left":
      this.endPoint[0] -= end.maxRadius;
      break;
  }
};

////////////////////////////////////////////////////////////////////////////////////
//Sector

function Sector(options) {
  this.Node = options.node;
  this.direction = options.direction;
  this.toNode = "";
  this.line = "";
  this.name = "";
  this.hover = false;
}
Sector.prototype.draw = function (x, y, radius, callback, callText) {
  let degree = { start: "", end: "" };
  let textOffset = { number: "", x: "", y: "" };

  switch (this.direction) {
    case "up":
      degree = { start: 1.25, end: 1.75 };
      textOffset = { text: "1", x: 0, y: 20 };
      break;
    case "right":
      degree = { start: 1.75, end: 2.25 };
      textOffset = { text: "2", x: -30, y: -10 };
      break;
    case "down":
      degree = { start: 2.25, end: 2.75 };
      textOffset = { text: "3", x: 0, y: -40 };
      break;
    case "left":
      degree = { start: 2.75, end: 3.25 };
      textOffset = { text: "4", x: 30, y: -10 };
      break;
  }
  ctx.beginPath();
  ctx.arc(x, y, radius, degree.start * Math.PI, degree.end * Math.PI);
  if (this.hover) {
    ctx.fillStyle = "#000";
  } else {
    ctx.fillStyle = "#00FF00";
  }
  if (this.toNode) {
    ctx.fillStyle = "#fff";
  }
  ctx.lineTo(x, y);
  ctx.restore();
  ctx.closePath();
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#000";
  ctx.stroke();
  ctx.font = "30px 黑体";
  if (callText) {
    callText();
  }
  if (this.hover) {
    ctx.fillStyle = "#fff";
  } else {
    ctx.fillStyle = "#000";
  }
  if (this.toNode) {
    ctx.fillStyle = "#000";
  }
  ctx.textAlign = "center";
  ctx.fillText(textOffset.text, x - textOffset.x, y - textOffset.y);

  if (callback) {
    callback(x, y, radius);
  }
};

Sector.prototype.createNew = function () {
  let circle = rootNode.getNode(this.Node);

  let newNode = new Circle({
    id: "Node" + uniqueID(),
  });
  let newLine = new Line({
    id: "Line" + uniqueID(),
  });
  newNode.createSelf();
  newLine.startDirect = this.direction;
  switch (this.direction) {
    case "up":
      newNode.x = circle.x;
      newNode.y = circle.y - 200;
      newLine.endDirect = "down";
      newNode.sectors[2].toNode = circle.id;
      newNode.sectors[2].line = newLine.id;
      newLine.startPoint = [circle.x, circle.y - circle.maxRadius];
      newLine.endPoint = [newNode.x, newNode.y + newNode.maxRadius];
      break;
    case "right":
      newNode.x = circle.x + 200;
      newNode.y = circle.y;
      newLine.endDirect = "left";
      newNode.sectors[3].toNode = circle.id;
      newNode.sectors[3].line = newLine.id;
      newLine.startPoint = [circle.x + circle.maxRadius, circle.y];
      newLine.endPoint = [newNode.x - newNode.maxRadius, newNode.y];
      break;
    case "down":
      newNode.x = circle.x;
      newNode.y = circle.y + 200;
      newLine.endDirect = "up";
      newNode.sectors[0].toNode = circle.id;
      newNode.sectors[0].line = newLine.id;
      newLine.startPoint = [circle.x, circle.y + circle.maxRadius];
      newLine.endPoint = [newNode.x, newNode.y - newNode.maxRadius];
      break;
    case "left":
      newNode.x = circle.x - 200;
      newNode.y = circle.y;
      newLine.endDirect = "right";
      newNode.sectors[1].toNode = circle.id;
      newNode.sectors[1].line = newLine.id;
      newLine.startPoint = [circle.x - circle.maxRadius, circle.y];
      newLine.endPoint = [newNode.x + newNode.maxRadius, newNode.y];
      break;
  }
  newLine.startNode = this.Node;
  newLine.endNode = newNode.id;

  this.toNode = newNode.id;
  this.line = newLine.id;
  rootNode.nodelist.push(newNode);
  rootNode.linelist.push(newLine);
  rootNode.mapput(true);
};

//////////////////////////////////////////////////////////////////////////////////
//Circle
function Circle(options) {
  this.id = options.id;
  this.x = options.x || "";
  this.y = options.y || "";
  this.content = "";

  this.maxRadius = size;
  this.radius = 10;
  this.grow = 1;
  this.sectors = [];
  this.focus = false;
  this.move = false;
}
Circle.prototype.createSelf = function () {
  if ((this.sectors = [])) {
    for (let direction of ["up", "right", "down", "left"]) {
      let newSector = new Sector({
        x: this.x,
        y: this.y,
        node: this.id,
        direction,
      });
      this.sectors.push(newSector);
    }
  }
};
Circle.prototype.draw = function (callback) {
  if (!this.focus) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.lineWidth = 2;
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.strokeStyle = "#000";
    ctx.stroke();
  } else {
    for (let sector of this.sectors) {
      sector.draw(this.x, this.y, this.maxRadius);
      if (callback) {
        callback(sector, this.x, this.y, this.maxRadius);
      }
    }
  }
};
Circle.prototype.drawAnim = function () {
  this.draw();
  if (this.radius <= this.maxRadius) {
    this.radius += this.grow;
    raf = window.requestAnimationFrame(this.drawAnim.bind(this));
  } else {
    window.cancelAnimationFrame(raf);
  }
};
Circle.prototype.getSector = function (direction) {
  for (let sector in this.sectors) {
    if (direction == sector.direction) {
      return sector;
    }
  }
};
Circle.prototype.checkinPath = function () {
  let disX = this.x - cursor.x;
  let disY = this.y - cursor.y;

  let distance = Math.sqrt(disX * disX + disY * disY);
  if (distance <= this.maxRadius - 1) {
    return true;
  } else {
    return false;
  }
};
Circle.prototype.removeLine = function (id) {
  for (let sector of this.sectors) {
    if (sector.line == id) {
      sector.line = "";
      sector.toNode = "";
    }
  }
};

///////////////////////////////////////////////////////////////////////////////////
//Node

function Node() {
  this.nodelist = [];
  this.linelist = [];
  this.dragSector = "";
  this.editNode = "";
  this.editLine = "";
  this.editing = false;
  this.showing = false;
}
function uniqueID() {
  return Math.floor(Math.random() * Date.now());
}
Node.prototype.start = function () {
  setSize();
  let newNode = new Circle({
    id: "Node" + uniqueID(),
    x: innerWidth / 2,
    y: innerHeight / 2,
  });
  newNode.createSelf();
  this.nodelist.push(newNode);
  this.mapput(true);
};
Node.prototype.drawNode = function (Anim, callback, callCircle) {
  if (Anim) {
    for (const node of this.nodelist) {
      node.drawAnim();
    }
  } else {
    for (const node of this.nodelist) {
      if (callCircle) {
        node.draw(callCircle);
      } else {
        node.draw();
      }
      if (callback) {
        callback(node);
      }
    }
  }
};
Node.prototype.drawLine = function (callback) {
  for (const line of this.linelist) {
    line.draw();
    if (callback) {
      callback(line);
    }
  }
};
Node.prototype.mapput = function (Anim, callback) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  this.drawLine();
  this.drawNode(Anim);
  if (callback) {
    callback();
  }
};
Node.prototype.getNode = function (id) {
  for (let Circle of this.nodelist) {
    if (id == Circle.id) {
      return Circle;
    }
  }
  if (true) {
    return null;
  }
};
Node.prototype.getSector = function (id, direction) {
  let Node = this.getNode(id);
  let Sector = Node.getSector(direction);
  return Sector;
};
Node.prototype.getLine = function (id) {
  for (let Line of this.linelist) {
    if (id == Line.id) {
      return Line;
    }
  }
};
Node.prototype.EventMouseUp = function () {
  this.drawLine(function (line) {
    let check = ctx.isPointInStroke(cursor.x, cursor.y);
    if (!line.focus) {
      if (check) {
        line.focus = true;
        rootNode.editLine = line.id;
        var dx = line.endPoint[0] - line.startPoint[0];
        var dy = line.endPoint[1] - line.startPoint[1];
        var midX = line.startPoint[0] + dx * 0.5 + 10;
        var midY = line.startPoint[1] + dy * 0.5;
        setBtn(20, midX, midY);
        line.draw();
      }
    } else {
      if (!check) {
        line.focus = false;
        line.draw();
        removeBtn();
      }
    }
  });
  this.drawNode(
    false,
    function (node) {
      if (!node.focus) {
        if (!node.move) {
          let check = ctx.isPointInPath(cursor.x, cursor.y);
          if (check && !rootNode.editing) {
            node.focus = true;
            rootNode.editNode = node.id;
            setBtn(node.maxRadius, node.x, node.y);
            node.draw();
          }
        } else {
          //拖拽结束
          node.move = false;
          removeBtn();
        }
      } else {
        let check = node.checkinPath();
        if (!check) {
          node.focus = false;
          removeBtn();
        }
      }
    },
    function (sector) {
      let check = ctx.isPointInPath(cursor.x, cursor.y);
      if (check && !sector.toNode) {
        if (!rootNode.dragSector && !rootNode.editing && !rootNode.showing) {
          sector.createNew();
        } else {
          ///拖拽连接
          if (sector.Node != rootNode.dragSector.Node) {
            let newLine = new Line({
              id: "Line" + uniqueID(),
            });
            sector.line = newLine.id;
            rootNode.dragSector.line = newLine.id;
            sector.toNode = rootNode.dragSector.Node;
            rootNode.dragSector.toNode = sector.Node;
            newLine.startNode = rootNode.dragSector.Node;
            newLine.endNode = sector.Node;
            newLine.startDirect = rootNode.dragSector.direction;
            newLine.endDirect = sector.direction;

            newLine.setPoint();
            rootNode.linelist.push(newLine);
            rootNode.mapput(true);
          }
        }
      }
      if (sector.move) {
        sector.move = false;
        rootNode.mapput();
      }
    }
  );
  this.dragSector = "";
};

Node.prototype.EventMouseMove = function () {
  this.drawLine(function (line) {
    let check = ctx.isPointInStroke(cursor.x, cursor.y);
    if (cursor.mousedown && !check) {
      line.focus = false;
      removeBtn();
      line.draw();
    }
  });
  this.drawNode(
    false,
    function (node) {
      let check = ctx.isPointInPath(cursor.x, cursor.y);
      if (!node.focus && check && cursor.mousedown) {
        node.move = true;
        node.x += cursor.MovementX;
        node.y += cursor.MovementY;
        for (let sector of node.sectors) {
          if (sector.line) {
            let Line = rootNode.getLine(sector.line);
            if (node.id == Line.startNode) {
              Line.startPoint[0] += cursor.MovementX;
              Line.startPoint[1] += cursor.MovementY;
            } else {
              Line.endPoint[0] += cursor.MovementX;
              Line.endPoint[1] += cursor.MovementY;
            }
          }
        }
        rootNode.mapput();
      }
    },
    function (sector, x, y, radius) {
      if (!sector.toNode) {
        let check = ctx.isPointInPath(cursor.x, cursor.y);
        if (check) {
          sector.hover = true;
          sector.draw(x, y, radius);
          if (cursor.mousedown && !rootNode.dragSector) {
            sector.move = true;
            rootNode.dragSector = sector;
            for (let Circle of rootNode.nodelist) {
              Circle.focus = true;
            }
          }
        } else {
          sector.hover = false;
          sector.draw(x, y, radius);
        }
      }
      if (sector.move) {
        rootNode.mapput(false);
        sector.draw(cursor.x, cursor.y, radius - 10, "", function () {
          ctx.font = "20px 黑体";
        });
      }
    }
  );
};
Node.prototype.presentation = function (id) {
  let node = rootNode.getNode(id);
  if (node == null) {
    return;
  }
  stageContent.innerHTML = node.content;
  for (let i = 0; i < node.sectors.length; i++) {
    if (node.sectors[i].toNode) {
      stageBtns[i].classList.add("display--active");
      if (!node.sectors[i].name) {
        stageBtns[i].innerHTML = i + 1 + " - default relation";
      } else {
        stageBtns[i].innerHTML = node.sectors[i].name;
      }
      stageBtns[i].onclick = function () {
        rootNode.presentation(node.sectors[i].toNode);
      };
    } else {
      stageBtns[i].classList.remove("display--active");
    }
  }
};

Node.prototype.editRelationPlan = function () {
  let node = rootNode.getNode(this.editNode);
  if (node == null) {
    return;
  }
  editContent.value = node.content;
  for (let i = 0; i < node.sectors.length; i++) {
    if (node.sectors[i].toNode) {
      editRelations[i].classList.add("display--active");
      editRelations[i].value = node.sectors[i].name;
    } else {
      editRelations[i].classList.remove("display--active");
    }
  }
};
Node.prototype.editRelation = function () {
  /////////编辑内容
  if (this.editNode) {
    let node = rootNode.getNode(this.editNode);
    node.content = editContent.value;
    for (let i = 0; i < node.sectors.length; i++) {
      node.sectors[i].name = editRelations[i].value;
    }
  }
};

Node.prototype.deleteNode = function () {
  let node = rootNode.getNode(rootNode.editNode);
  let lines = [];
  for (let sector of node.sectors) {
    if (sector.line) {
      lines.push(sector.line);
    }
  }
  // console.log(lines, node);
  let NodeIndex = rootNode.nodelist.findIndex(
    (item) => item.id == rootNode.editNode
  );
  rootNode.nodelist.splice(NodeIndex, 1);
  for (let id of lines) {
    let LineIndex = rootNode.linelist.findIndex((item) => item.id == id);
    rootNode.linelist.splice(LineIndex, 1);
    for (let node of rootNode.nodelist) {
      node.removeLine(id);
    }
  }

  rootNode.mapput(false);
};

function setBtn(radius, x, y) {
  btnBox.classList.add("active");
  btnBox.style.width = radius * 3 + "px";
  btnBox.style.left = x - radius - 25 + "px";
  btnBox.style.top = y - 15 + "px";
}
function removeBtn() {
  btnBox.classList.remove("active");
  btnBox.style.width = "0px";
  btnBox.style.left = "0px";
  btnBox.style.top = "0px";
}

const canvas = document.getElementById("design");
const btnBox = document.querySelector(".btn__box");

const ctx = canvas.getContext("2d");
const size = 50;
let raf;
let rootNode = new Node();
rootNode.start();

// console.log(rootNode);
///////////////////////////////////////////////////////
const cursor = {
  x: innerWidth / 2,
  y: innerHeight / 2,
  mousedown: false,
  MovementX: 0,
  MovementY: 0,
};

addEventListener("mousemove", (e) => {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
  cursor.MovementX = e.movementX;
  cursor.MovementY = e.movementY;
  rootNode.EventMouseMove(e);
});
addEventListener("mousedown", (e) => {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
  cursor.MovementX = e.movementX;
  cursor.MovementY = e.movementY;
  cursor.mousedown = true;
});
addEventListener("mouseup", (e) => {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
  cursor.mousedown = false;
  rootNode.EventMouseUp(e);
});

////////////////////////////////////////////////////////
///
const presentationBtn = document.querySelector("#presentation_btn");
const designBtn = document.querySelector("#design_btn");

const stageContent = document.querySelector(".stage__top");
const stageBtns = document.querySelectorAll(".stage__bottom__box button");

const editContent = document.querySelector(".edit__form textarea");
const editRelations = document.querySelectorAll(".edit__form input");

const editBtnUpdate = document.querySelector(".edit__close");

const deleteNodeBtn = document.querySelector("#deleteNode");
const editNodeBtn = document.querySelector("#editNode");

presentationBtn.onclick = function () {
  rootNode.showing = true;
  presentationBtn.classList.remove("active");
  designBtn.classList.add("active");
  rootNode.presentation(rootNode.nodelist[0].id);
};
designBtn.onclick = function () {
  rootNode.showing = false;
  designBtn.classList.remove("active");
  presentationBtn.classList.add("active");
};
editNodeBtn.addEventListener("click", (event) => {
  rootNode.editing = true;
  rootNode.editRelationPlan();
});
editBtnUpdate.addEventListener("click", (event) => {
  rootNode.editing = false;
  rootNode.editRelation();
  for (let i of editRelations) {
    i.value = "";
  }
});
deleteNodeBtn.addEventListener("click", (event) => {
  rootNode.deleteNode();
});

function setSize() {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
  rootNode.mapput(false);
}

addEventListener("resize", () => setSize());
