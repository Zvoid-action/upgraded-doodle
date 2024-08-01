/**
 *
 * @authors Your Name (you@example.org)
 * @date    2020-12-22 22:40:19
 * @version $Id$
 */
function font(oCss){
      var oBox=document.createElement("p");
      oCss.parent.appendChild(oBox);
      oBox.innerHTML=oCss.p;
      oBox.className=oCss.c;
      return oBox;
}
function mainmenu(){
  playarea=create({
            "w":1100,
            "h":600,
            "p":"relative",
            "parent":document.body,
            "l":"",
            "t":""});
  // playarea.style.marginLeft="200px";
  // playarea.style.padding="100px"
  playarea.style.float="left";
var menuman=create({
            "w":600,
            "h":1000,
            "p":"relative",
            "parent":document.body,
            "t":""});
menuman.style.left="55%";
menuman.style.backgroundSize="100% 100%"
menuman.style.backgroundImage="url(image/man3.png)";
var mantalk=create({
            "w":300,
            "h":100,
            "p":"absolute",
            "parent":menuman,
            "l":150,
            "t":500});
mantalk.style.backgroundColor="rgba(0,0,0,0.5)";
mantalk.style.border="2px solid #000";
mantalk.style.borderRadius="20px";
var manmessage=font({
    "parent":mantalk,
    "p":"你来了？",
    "c":"title2"});
setTimeout(function(){
    menuman.innerHTML="";
},3000);
menuman.onclick=function(){
menuman.innerHTML="";
var talk=["欢迎欢迎","玩的高兴","没事别找我！！！",".......","游玩愉快:)","hentai 无路赛!!!","就这？","呵呵呵","权限不足","若有人兮山之阿...","呵呵呵","主人是地图设计的笨蛋"];
var message=Math.floor(Math.random()*talk.length);
var mantalk=create({
            "w":300,
            "h":100,
            "p":"absolute",
            "parent":menuman,
            "l":150,
            "t":500});
mantalk.style.backgroundColor="rgba(0,0,0,0.5)";
mantalk.style.border="2px solid #000";
mantalk.style.borderRadius="20px";
var manmessage=font({
    "parent":mantalk,
    "p":talk[message],
    "c":"title2"});
setTimeout(function(){
    menuman.innerHTML="";
    on=false;
},3000)
}

var Mapa=font({
    "parent":playarea,
    "p":"01",
    "c":"hex"});
Mapa.style.marginLeft="350px";
Mapa.style.marginTop="150px";

var Mapwhere=font({
    "parent":playarea,
    "p":"B",
    "c":"hex"});
Mapwhere.style.marginLeft="350px";
Mapwhere.style.marginTop="300px";

var Mapc=font({
    "parent":playarea,
    "p":"03",
    "c":"hex"});
Mapc.style.marginLeft="350px";
Mapc.style.marginTop="450px";
var Mapd=font({
    "parent":playarea,
    "p":"04",
    "c":"hex"});
Mapd.style.marginLeft="200px";
Mapd.style.marginTop="300px";
var Mape=font({
    "parent":playarea,
    "p":"02",
    "c":"hex"});
Mape.style.marginLeft="500px";
Mape.style.marginTop="300px";
    Mapa.onclick=function(){
    level=1;
    arr=Maparr()[level];
    registrar=[];
    document.body.innerHTML="";
    setblack();
    setTimeout(beganthefristgame,1000);
    setTimeout(allthegame(arr),1000);
    setTimeout(clearsnow,6000);
    }
    Mape.onclick=function(){
    level=2;
    arr=Maparr()[level];
    registrar=[];
    document.body.innerHTML="";
    setblack();
    setTimeout(beganthesecondgame,1000);
    setTimeout(allthegame(arr),1000);
    setTimeout(clearsnow,6000);
    }
    Mapc.onclick=function(){
    level=3;
    arr=Maparr()[level];
    registrar=[];
    document.body.innerHTML="";
    setblack();
    setTimeout(begantheThridgame,1000);
    setTimeout(allthegame(arr),1000);
    setTimeout(clearsnow,6000);
    }
    Mapd.onclick=function(){
    level=4;
    arr=Maparr()[level];
    registrar=[];
    document.body.innerHTML="";
    setblack();
    setTimeout(begantheforthgame,1000);
    setTimeout(allthegame(arr),1000);
    setTimeout(clearsnow,6000);
    }
    Mapwhere.onclick=function(){
    document.body.innerHTML="";
    setmainmenu();
    document.onkeydown=function(e){menucatmove(e)}
    }
}

