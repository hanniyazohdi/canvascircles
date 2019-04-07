let canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var arr = [];

function Circle(x, y){
	this.x = x;
	this.y = y;
	this.radius = Math.floor(Math.random()*10) + 5;
	
		let r1 = Math.floor(Math.random()*256);
		let r2 = Math.floor(Math.random()*256);
		let r3 = Math.floor(Math.random()*256);
	this.color = "rgb("+r1+", "+r2+", "+r3+")";
	
	this.draw = function(){
		ctx.fillStyle = this.color;
		ctx.beginPath();
     	ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
     	ctx.fill();
	}
}

canvas.onclick = function drawCircle(){
	
	let newCircle = new Circle(event.offsetX, event.offsetY);
	
	arr.push(newCircle);
	
	newCircle.draw();
}


button.addEventListener("click", changeEm);

function changeEm(){
	ctx.clearRect(0, 0, 250, 250);
	
	for (let i = 0; i < arr.length; i++) {
		arr[i].radius = Math.floor(Math.random()*10) + 5;
		arr[i].draw(); 	
	}
	
}

window.addEventListener("keydown", radius);

function radius(event) {
  switch (event.keyCode) {
    case 66: // left
      big();
      break;
          
    case 83: //up
      small();
      break;
  }
}


function big(){
	ctx.clearRect(0, 0, 250, 250);
		
		for (let i = 0; i < arr.length; i++) {
			arr[i].radius = 10;
			arr[i].draw(); 	
		}
}

function small(){
	ctx.clearRect(0, 0, 250, 250);
		
		for (let i = 0; i < arr.length; i++) {
			arr[i].radius = 5;
			arr[i].draw(); 	
		}
}