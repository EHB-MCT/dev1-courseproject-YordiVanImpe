import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";
import * as Noise from "../scripts/noise.js";

let width = window.innerWidth;
let height = window.innerHeight;
let offset = 10;
context.fillStyle = "black";
context.fillRect(0, 0, width, height);
perlin();
playButton();
//
// gebruik gemaakt van Peter Dick's Noise functie @Erasmushogeschool Brussel
function perlin() {
	for (let j = 0; j < 7; j++) {
		let r = Math.random() * 30;
		let g = 10;
		let b = 20;
		let a = Math.random() * 15 + 60;
		context.strokeStyle = Utils.rgba(r, g, b, a);
		context.lineWidth = 5;

		for (let i = 0; i <= width; i++) {
			let x = i;
			let y = height / 3 + Noise.perlinNoise((i - 2 * j) / 300) * 200 + 10 * j;
			context.strokeRect(x, y, 1, 1);
		}
	}
}

function playButton() {
	let x = width / 2;
	let y = height / 2;
	context.lineWidth = 5;
	context.strokeStyle = Utils.hsla(Math.random() * 360, 80, 70, 100);
	Utils.strokeCircle(x, height / 2, 100);
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
