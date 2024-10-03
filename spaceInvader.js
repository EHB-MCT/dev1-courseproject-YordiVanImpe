let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

DrawBackground();
DrawLogo();

function DrawBackground() {
	context.fillStyle = "black";
	context.beginPath();
	context.rect(0, 0, 300, 300);
	context.fill();
}

function DrawLogo() {
	context.fillStyle = "#94A7DF";

	context.beginPath();
	context.rect(20, 20, 50, 50);
	context.rect(70, 20, 50, 50);
	context.rect(170, 20, 50, 50);
	context.rect(220, 20, 50, 50);
	context.rect(70, 120, 50, 50);
	context.rect(170, 120, 50, 50);
	context.rect(70, 220, 50, 50);
	context.rect(20, 220, 50, 50);
	context.rect(170, 220, 50, 50);
	context.rect(220, 220, 50, 50);

	context.fill();
}
