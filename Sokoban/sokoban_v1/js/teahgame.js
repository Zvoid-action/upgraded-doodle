/**
 *
 * @authors Your Name (you@example.org)
 * @date    2020-12-22 12:35:08
 * @version $Id$
 */
function font(oCss){
      var oBox=document.createElement("p");
      oCss.parent.appendChild(oBox);
      oBox.innerHTML=oCss.p;
      oBox.className=oCss.c;
      return oBox;
  }
function create(oCss){
      var oBox=document.createElement("div");
      oCss.parent.appendChild(oBox);
      oBox.style.width=oCss.w+"px";
      oBox.style.height=oCss.h+"px";
      oBox.style.position=oCss.p;
      oBox.style.left=oCss.l+"px";
      oBox.style.top=oCss.t+"px";
      oBox.style.backgroundSize="100%";
      return oBox;
 }
function Maparr(){
var arr=[   [
            [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
            [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
            [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
            [6,0,0,0,0,0,4,1,1,1,1,1,1,1,1,1,5,0,0,0,0,6],
            [6,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,6],
            [6,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,6],
            [6,0,0,0,0,0,3,2,3,3,3,7,3,3,10,3,3,0,0,0,0,6],
            [6,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,6],
            [6,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,6],
            [6,0,0,0,0,0,4,1,1,1,1,1,1,1,1,1,5,0,0,0,0,6],
            [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
            [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]
            ],
           [
            [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
            [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
            [6,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,6],
            [6,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,6],
            [6,0,0,0,10,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,6],
            [6,0,0,1,1,1,1,1,1,1,0,3,3,1,1,1,1,1,1,0,0,6],
            [6,0,0,0,0,1,0,0,0,0,0,3,2,3,0,0,1,0,7,0,0,6],
            [6,0,0,0,0,1,0,0,0,0,0,3,3,3,0,10,1,0,0,0,0,6],
            [6,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,6],
            [6,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
            [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
            [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]
            ],
            [
            [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
            [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
            [6,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
            [6,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,6],
            [6,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
            [6,0,0,1,10,0,0,0,0,1,0,3,3,3,0,0,0,0,0,0,0,6],
            [6,0,0,1,1,1,0,0,0,0,1,3,2,3,0,0,0,7,0,0,0,6],
            [6,0,0,1,0,0,0,1,0,0,1,3,3,3,0,0,0,0,0,0,0,6],
            [6,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,6],
            [6,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,6],
            [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
            [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]
            ],
            [
            [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
            [6,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,6],
            [6,0,0,0,0,1,0,7,0,1,9,1,0,0,0,0,1,1,1,0,0,6],
            [6,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,10,0,0,0,6],
            [6,0,0,0,1,10,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,6],
            [6,0,0,0,1,10,0,0,0,0,0,3,3,3,0,0,1,0,0,0,0,6],
            [6,0,0,0,0,1,0,0,0,0,0,3,2,3,0,0,0,0,0,0,0,6],
            [6,0,0,0,0,1,0,0,0,0,0,3,3,3,0,0,0,0,7,0,0,6],
            [6,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,6],
            [6,0,1,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,6],
            [6,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,6],
            [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]
            ],
            [
            [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
            [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
            [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
            [6,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,6],
            [6,0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0,6],
            [6,0,0,0,0,0,0,0,0,3,3,0,3,3,0,0,0,0,0,0,0,6],
            [6,0,0,7,0,0,0,0,1,3,0,2,0,3,1,0,0,0,10,0,0,6],
            [6,0,0,0,0,0,0,0,0,3,3,0,3,3,0,0,0,0,0,0,0,6],
            [6,0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0,6],
            [6,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,6],
            [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
            [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]
            ]
            ];
            return arr;
        }
function allthegame(arr){
  playarea=create({
                "w":1100,
                "h":600,
                "p":"relative",
                "parent":document.body,
                "l":"",
                "t":""});
playarea.size={"row":arr.length,"col":arr[0].length};
playarea.style.backgroundColor="#080808";
playarea.style.margin="0px 10px";
playarea.style.float="left";
introduce=create({
                    "w":200,
                    "h":500,
                    "p":"relative",
                    "parent":document.body,
                    "l":"",
                    "t":""});

introduce.style.float="left";
introduce.style.marginTop="50px";
w=playarea.clientWidth/playarea.size.col;
h=playarea.clientHeight/playarea.size.row;
inputMap(arr);
document.onkeydown=function(e){move(e);}
}
function introducearea(){
  //构建介绍区域
var iduce=create({
                    "w":150,
                    "h":100,
                    "p":"absolute",
                    "parent":introduce,
                    "l":"",
                    "t":""});
iduce.style.backgroundImage="url(image/介绍1.png)";
iduce.innerHTML="MOVE";
iduce.className="font2";
var lastone=create({
                    "w":80,
                    "h":80,
                    "p":"absolute",
                    "parent":introduce,
                    "l":"",
                    "t":"180"});
lastone.style.backgroundImage="url(image/Z.png)";
lastone.innerHTML="UNDO";
lastone.className="font3";
var restart=create({
                    "w":80,
                    "h":80,
                    "p":"absolute",
                    "parent":introduce,
                    "l":"",
                    "t":"300"});
restart.style.backgroundImage="url(image/R.png)";
restart.innerHTML="RESTART";
restart.className="font3";
}
function inputMap(){
    on=false;
    var introduct=create({"w":30,
                        "h":30,
                        "p":"absolute",
                        "parent":playarea,
                        "l":1050,
                        "t":100
                    });
        introduct.style.backgroundImage="url(image/i.png)";
        introduct.style.backgroundSize="100% 100%";
        introduct.style.zIndex="11";
        introduct.onclick=function(){
          if(on==true){
             introduce.innerHTML="";
             on=false;
          }else{
            introducearea();
            on=true;
          }
                }
    for(var row=0;row<playarea.size.row;row++){
            for(var col=0;col<playarea.size.col;col++){
                var oGrid=create({
                                "w":w,
                                "h":h,
                                "p":"absolute",
                                "parent":playarea,
                                "l":w*col,
                                "t":h*row
                            });
              if(arr[row][col]==6){
                oGrid.style.backgroundColor="#15181f";
               }
               if(arr[row][col]==3){
                oGrid.style.backgroundImage="url(image/地面.png)";
                oGrid.style.opacity=0.3;
               }
               if(arr[row][col]==1){
                oGrid.style.backgroundImage="url(image/障碍2.png)";
               }
               if(arr[row][col]==4){
                oGrid.style.backgroundImage="url(image/障碍1.png)";
               }
               if(arr[row][col]==5){
                oGrid.style.backgroundImage="url(image/障碍3.png)";
               }
               if(arr[row][col]==2){
                role=create({
                                "w":w,
                                "h":h,
                                "p":"absolute",
                                "parent":playarea,
                                "l":w*col,
                                "t":h*row
                            });
                role.row=row;
                role.col=col;
                role.style.transition=".5s";
                role.style.backgroundImage="url(image/人物（右）.png)";
                role.style.zIndex="5"
               }
               if(arr[row][col]==9){
                thedoor=create({
                                "w":w,
                                "h":h,
                                "p":"absolute",
                                "parent":playarea,
                                "l":w*col,
                                "t":h*row
                            });
                thedoor.row=row;
                thedoor.col=col;
                thedoor.style.backgroundImage="url(image/图片1.gif)";
                thedoor.style.zIndex="5"
               }
               if(arr[row][col]==10){
                var win=create({
                                "w":w,
                                "h":h,
                                "p":"absolute",
                                "parent":playarea,
                                "l":w*col,
                                "t":h*row
                            });
                win.row=row;
                win.col=col;
                win.style.backgroundImage="url(image/旗帜.png)";
                win.style.zIndex="5"
               }
               if(arr[row][col]==7){
                var oCase=create({
                                "w":w,
                                "h":h,
                                "p":"absolute",
                                "parent":playarea,
                                "l":w*col,
                                "t":h*row
                            });
                oCase.row=row;
                oCase.col=col;
                oCase.style.transition=".5s";
                oCase.id="box"+row+col;
                oCase.style.backgroundImage="url(image/球.png)";
                oCase.className="mybox";
                oCase.where=[[oCase.row,oCase.col]];
                oCase.style.zIndex="4"
               }
            }
        }
}

