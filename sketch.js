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
	noStroke();

	rect(leftX, 50, 200, 300);
	rect(rightX, 50, 200, 300);

	fill(color(255));
	circle(leftX + 180, 200, 40);
	beginShape();
	vertex(leftX + 200, 200);
	vertex(leftX + 200, 240);
	vertex(leftX + 166.5, 215);
	endShape();

	circle(rightX + 20, 200, 40);
	beginShape();
	vertex(rightX, 200);
	vertex(rightX + 33, 215);
	vertex(rightX, 240);
	endShape(CLOSE);

	if (leftMove) {
		leftX = lerp(leftX, -200, 0.1);
	}

	if (rightMove) {
		rightX = lerp(rightX, 600, 0.1);
	}

	stroke(0);
	if (!rightMove && !leftMove) {
		line(300, 50, 300, 350);
		document.getElementById("nextPage").style.display = "none";
	} else if (rightMove && leftMove) {
		document.getElementById("nextPage").style.display = "block";
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
