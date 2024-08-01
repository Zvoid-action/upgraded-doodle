/**
 *
 * @authors Your Name (you@example.org)
 * @date    2020-12-23 23:14:57
 * @version $Id$
 */
function to(){
     document.onkeydown=null;
     setblack();
     setTimeout(clearsnow,6000);
}
var windowWidth=window.screen.width;
var windowHeight=window.screen.height;
var windowBottom=window.screen.bottom;
var windowRight=window.screen.right;
function createSnow(){
            var left=0;
            var top=0;
            var bottom=0;
            var right=0;
            topblack();
            leftblack();
            bottomblack();
            rightblack();
        function topblack(){
            var left_random=Math.random()* windowWidth;
            var top_random=Math.random()* 50;
            var div=document.createElement('div');
            div.className='snow';
            div.style.transform='scale('+(Math.random()*3)+')'
            div.style.left=left_random+left+'px';
            div.style.top=top_random+top+'px';
            div.style.marginTop="-250px";
            document.body.appendChild(div);
         }
         function leftblack(){
            var left_random=Math.random()*50;
            var top_random=Math.random()* windowHeight;
            var div=document.createElement('div');
            div.className='snow';
            div.style.transform='scale('+(Math.random()*2)+')'
            div.style.left= left_random+ left+'px';
            div.style.top=top_random+ top+'px';
            div.style.marginLeft="-250px";
            document.body.appendChild(div);
         }
         function bottomblack(){
            var left_random=Math.random()*windowWidth;
            var bottom_random=Math.random()*50;
            var div=document.createElement('div');
            div.className='snow';
            div.style.transform='scale('+(Math.random()*2)+')'
            div.style.left=left_random+left+'px';
            div.style.bottom=bottom_random+bottom+'px';
            div.style.marginBottom="-250px";
            document.body.appendChild(div);
         }
         function rightblack(){
            var right_random=Math.random()*50;
            var top_random=Math.random()* windowHeight;
            var div=document.createElement('div');
            div.className='snow';
            div.style.transform='scale('+(Math.random()*2)+')'
            div.style.right=right_random+right+'px';
            div.style.top=top_random+ top+'px';
            div.style.marginRight="-250px";
            document.body.appendChild(div);
         }
        }
function setblack(){
for(var i=0;i<100;i++){
    createSnow();
    }
}
function clearsnow(){
    var snow=document.querySelectorAll(".snow");
    for(var i=0;i<snow.length;i++){
        snow[i].style.width="0";
        snow[i].style.height="0";
    }
}
function begantheteachgame(){
var Fontarea=create({
                    "w":500,
                    "h":600,
                    "p":"absolute",
                    "parent":document.body,
                    "l":"400",
                    "t":"0"});
Fontarea.style.marginTop="100px";
Fontarea.className="blackarea";
Fontarea.style.zIndex="1000";
var levelp=font({ "parent":Fontarea,"p":"Level 0","c":"startgame1"});
var titlep=font({ "parent":Fontarea,"p":"空山的猫","c":"startgame2"});
var titlp=font({ "parent":Fontarea,"p":"欢迎来到\"空山\"","c":"startgame1"});
}
function beganthefristgame(){
var Fontarea=create({
                    "w":500,
                    "h":600,
                    "p":"absolute",
                    "parent":document.body,
                    "l":"400",
                    "t":"0"});
Fontarea.style.marginTop="100px";
Fontarea.className="blackarea";
Fontarea.style.zIndex="1000";
var levelp=font({ "parent":Fontarea,"p":"Level 1","c":"startgame1"});
var titlep=font({ "parent":Fontarea,"p":"图书馆","c":"startgame2"});
var titlp=font({ "parent":Fontarea,"p":"书中承载的是命运","c":"startgame1"});
}
function beganthesecondgame(){
var Fontarea=create({
                    "w":500,
                    "h":600,
                    "p":"absolute",
                    "parent":document.body,
                    "l":"400",
                    "t":"0"});
Fontarea.style.marginTop="100px";
Fontarea.className="blackarea";
Fontarea.style.zIndex="1000";
var levelp=font({ "parent":Fontarea,"p":"Level 2","c":"startgame1"});
var titlep=font({ "parent":Fontarea,"p":"机器人","c":"startgame2"});
var titlp=font({ "parent":Fontarea,"p":"众多的选择，实为必然","c":"startgame1"});
}
function begantheThridgame(){
var Fontarea=create({
                    "w":500,
                    "h":600,
                    "p":"absolute",
                    "parent":document.body,
                    "l":"400",
                    "t":"0"});
Fontarea.style.marginTop="100px";
Fontarea.className="blackarea";
Fontarea.style.zIndex="1000";
var levelp=font({ "parent":Fontarea,"p":"Level 3","c":"startgame1"});
var titlep=font({ "parent":Fontarea,"p":"门女士","c":"startgame2"});
var titlp=font({ "parent":Fontarea,"p":"你最好不要后悔","c":"startgame1"});
}
function begantheforthgame(){
var Fontarea=create({
                    "w":500,
                    "h":600,
                    "p":"absolute",
                    "parent":document.body,
                    "l":"400",
                    "t":"0"});
Fontarea.style.marginTop="100px";
Fontarea.className="blackarea";
Fontarea.style.zIndex="1000";
var levelp=font({ "parent":Fontarea,"p":"Level 4","c":"startgame1"});
var titlep=font({ "parent":Fontarea,"p":"深渊","c":"startgame2"});
var titlp=font({ "parent":Fontarea,"p":"创造，控制，夺取","c":"startgame1"});
}
function winthegame(){
var Fontarea=create({
                    "w":500,
                    "h":600,
                    "p":"absolute",
                    "parent":document.body,
                    "l":"400",
                    "t":"0"});
Fontarea.style.marginTop="200px";
Fontarea.className="blackarea";
Fontarea.style.zIndex="1000";
var titlep=font({ "parent":Fontarea,"p":"CONGRATULATION!","c":"winfont"});
}