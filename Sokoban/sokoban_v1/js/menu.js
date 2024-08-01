/**
 *
 * @authors Your Name (you@example.org)
 * @date    2020-12-22 12:30:05
 * @version $Id$
 */
   var menucat;
   var a;
   var where=[150,260,380,480];
  function setmainmenu(){
    document.body.innerHTML="";
    setblack();
     setTimeout(menu,1000);
     setTimeout(clearsnow,6000);
   document.onkeydown=function(e){mainmenucatmove(e)}
   }
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
function menu(){
  var menubox=create({
                    "w":700,
                    "h":500,
                    "p":"relative",
                    "parent":document.body,
                    "l":"",
                    "t":"0"});
  menubox.style.left="20%";
menubox.style.zIndex="1";
menubox.style.marginTop="50px"
menubox.className="menu";
var titlep=font({ "parent":menubox,"p":"空山的猫","c":"title1"});
a=0;
  menucat=create({
                    "w":100,
                    "h":100,
                    "p":"absolute",
                    "parent":menubox,
                    "l":"0",
                    "t":where[a]});
menucat.style.backgroundImage="url(image/人物（右）.png)";
menucat.style.zIndex="2";
var selecta=font({ "parent":menubox,"p":"开始游戏","c":"font1"});
var selectb=font({ "parent":menubox,"p":"返回目录","c":"font1"});
var selectc=font({ "parent":menubox,"p":"其他","c":"font1"});
var selectd=font({ "parent":menubox,"p":"退出游戏","c":"font1"});
selecta.onclick=function(){
        document.body.innerHTML="";
        setblack();
       begantheteachgame();
       setTimeout(allthegame(arr),2000);
       setTimeout(clearsnow,6000);
}
selectb.onclick=function(){
        document.body.innerHTML="";
        setblack();
       setTimeout(mainmenu,2000);
       setTimeout(clearsnow,6000);
}
 }
function menucatmove(e){
   var key=e.keyCode;
   if(key==38){
     if(a==0){
      a=3;
     }else{a--;}
   }
   if(key==40){
     if(a==3){
      a=0;
     }else{a++;}
   }
   menucat.style.top=where[a]+"px";
   if(key==32||key==13){
    if(a==0){
        document.body.innerHTML="";
        setblack();
       setTimeout(begantheteachgame,1000);
       setTimeout(allthegame(arr),1000);
       setTimeout(clearsnow,6000);
         }
    if(a==1){
      document.body.innerHTML="";
      setblack();
      setTimeout(mainmenu,1000);
      setTimeout(clearsnow,6000);
         }
    if(a==2){
    alert("no");
         }
    if(a==3){
    alert("no");
         }
   }
 }

