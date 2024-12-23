import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";
import * as Noise from "../scripts/noise.js";

let width = window.innerWidth;
let height = window.innerHeight;
let offset = 10;

context.fillStyle = "black";
context.fillRect(0, 0, width, height);

context.fillStyle = "black";
context.fillRect(0, 0, width, height);
playButton(width / 2, height / 2, 100, 5); // parameters voor positie, grootte en lijn dikte
// Parameters adapted by chatGPT for the DEV1 course @ Erasmushogeschool Brussel

update();
DrawLogo();

window.onmousemove = move;

function playButton(x, y, radius, lineWidth) {
	context.lineWidth = lineWidth;
	context.strokeStyle = Utils.hsla(Math.random() * 360, 80, 70, 100);
	Utils.strokeCircle(x, y, radius);
	context.beginPath();
	context.moveTo(x - 40 + offset, y - 40);
	for (let i = 1; i < 3; i++) {
		let s = i % 2;
		let xPos = x + (-40 + 80 * s) + offset;
		let yPos = y + (-40 + 40 * i);
		context.lineTo(xPos, yPos);
	}
	context.closePath();
	context.stroke();
}
//animatie voor de playbutton en zorgt ervoor dat het logo blijft staan
function update() {
	playButton(width / 2, height / 2, 100, 5);
	DrawLogo();
	requestAnimationFrame(update);
}

/**
 *
 * @param {MouseEvent} e
 */
function move(e) {
	console.log(e.pageX);
	context.fillStyle = "black";
	context.fillRect(0, 0, width, height);
	for (let j = 0; j < 7; j++) {
		let r = Math.random() * 30;
		let g = 10;
		let b = 20;
		let a = Math.random() * 15 + 60;
		context.strokeStyle = Utils.rgba(r, g, b, a);
		context.lineWidth = 5;

		for (let i = 0; i <= width; i++) {
			let x = i;
			let y =
				height / 3 + Noise.perlinNoise((i - 2 * j) / e.pageX) * 200 + 10 * j;
			context.strokeRect(x, y, 1, 1);
		}
	}
}
function DrawLogo() {
	context.fillStyle = "#94A7DF";

	context.beginPath();
	context.rect(1400, 600, 20, 20);
	context.rect(1420, 600, 20, 20);
	context.rect(1465, 600, 20, 20);
	context.rect(1485, 600, 20, 20);
	context.rect(1420, 645, 20, 20);
	context.rect(1465, 645, 20, 20);
	context.rect(1400, 690, 20, 20);
	context.rect(1420, 690, 20, 20);
	context.rect(1465, 690, 20, 20);
	context.rect(1485, 690, 20, 20);

	context.fill();
}
