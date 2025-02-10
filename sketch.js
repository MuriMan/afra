let canvas;

function preload() {
	us = loadImage("./us.jpg");
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.parent('canvas-container'); // If used inside an HTML file
    background(220);

	image(us, 0, 0);
	describe("yay");
}

function draw() {
    // Your drawing code here
}
