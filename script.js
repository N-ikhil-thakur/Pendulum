var canvas = document.querySelector("#board");
var ctx = canvas.getContext("2d");
canvas.style.background="gray";

var x=400;
var y=400;
var r;
var l=400;
var angle=0;
var valuex;
var valuey;
var acc=0.1;
var vel=0.1;
var status="left";
var color=["red","green","blue","white","yellow","bluevoilet"];
// console.log(valuex);

function draw(){
    ctx.beginPath();
    ctx.moveTo(400, 0);
    ctx.lineTo(x, y);
    ctx.stroke();

ctx.rect(100,100,10,10);
ctx.stroke
 ctx.beginPath();
   var circle= ctx.arc(x,y, 10,10,Math.PI*2*20);
    // ctx.stroke();
    ctx.fill();
    // ctx.translate(0,0);
    // ctx.rotate(3000);
// vel-=acc;
// angle-=0.1;
if(status=="left"){
    angle-=0.5;
ctx.strokeStyle="green";
ctx.fillStyle="yellow";
}
if(angle==-45){
    status="right";
}

if( status=="right"){
    angle+=0.5;
    ctx.strokeStyle="red";
    ctx.fillStyle="blue";
    ctx.fillStyle="white";
}
if(angle==45){
    status="left";
}
// circle.clear();




valuex=Math.sin((angle)*(Math.PI/180));
valuey=Math.cos((angle)*(Math.PI/180));

x=l+l*valuex; 
y=(l*valuey);





 }
// draw();
// canvas.reset();
setInterval(draw,10);