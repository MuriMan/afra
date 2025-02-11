let canvas;

function preload() {
	us = loadImage("./us.jpg");
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.parent('canvas-container');
}

var leftX = 100;
var rightX = 300;

var leftMove = false;
var rightMove = false;

function draw() {
    background(220);

	imageMode(CENTER);
	image(us, 300, 200);

	fill(color(255, 0, 0));

	rect(leftX, 50, 200, 300);
	rect(rightX, 50, 200, 300);

	if (leftMove) {
		leftX = lerp(leftX, -200, 0.5);
	}

	if (rightMove) {
		rightX = lerp(rightX, 600, 0.5);
	}
}

function mouseClicked() {
	if (mouseX > 100 && mouseX < 300) {
		leftMove = true;
	}

	if (mouseX > 300 && mouseX < 500) {
		rightMove = true;
	}
}
