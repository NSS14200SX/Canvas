var canvas = document.getElementById('convas_paint');
var ctx = canvas.getContext('2d');
var myColor = 'black';
var okColor = 'white';
var rSize = 1;
var cValue = document.getElementById("bColor");

document.getElementById('size').oninput = function(){
	rSize = this.value;
}

document.getElementById("color").oninput = function(){
	myColor = this.value; 
}

ctx.beginPath();
ctx.fillStyle = okColor;
ctx.fillRect(0, 0, 1000, 500);
ctx.fill();

cValue.oninput = function(){
	okColor = this.value; 
}

document.getElementById("cColor").onclick = function(){
	ctx.beginPath();
	ctx.fillStyle = okColor;
	ctx.fillRect(0, 0, 1000, 500);
	ctx.fill();
}

canvas.onmousedown = function(event){
  var x = event.offsetX;
  var y = event.offsetY;
  ctx.beginPath();
 	ctx.moveTo (x,y);
 	//ctx.pos = [x,y];
 	ctx.drawing = true;
}﻿
canvas.onmousemove = function (event){
	if (ctx.drawing){
    var x = event.offsetX;
    var y = event.offsetY;
    ctx.lineWidth = rSize
    ctx.strokeStyle = myColor
		ctx.lineCap = "round"
		ctx.lineTo (x,y)
    ctx.stroke()    
	}
}
canvas.onmouseup = function(){
		ctx.drawing = false;
}

document.getElementById('pClear').onclick = function(){
	ctx.beginPath();
	ctx.clearRect(0, 0, 1000, 500);	
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, 1000, 500);
	ctx.fill();
}

