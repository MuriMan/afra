let canvas;

function setup() {
    canvas = createCanvas(600, 400);
    canvas.parent('canvas-container');

	x = floor(random() * 600);
	y = floor(random() * 400);
}

var x = 0;
var y = 0;

var collected = 0;
function draw() {
    background(220);

	fill(255, 0, 0);

	noStroke();
	circle(x + 10, y + 10, 20);
	circle(x + 30, y + 10, 20);
	beginShape();
		vertex(x + 1.34, y + 15);
		vertex(x + 20, y + 10);
		vertex(x + 38.7, y + 15);
		vertex(x + 20, y + 30);
	endShape();

	if (!(collected >= 7)) {
		document.getElementById("nextPage").style.display = "none";
	} else {
		document.getElementById("nextPage").style.display = "block";
	}

	document.getElementById("heartCount").innerText = "Collected: " + collected;
}

function mouseClicked() {
	if (mouseX > x && mouseX < x + 40 && mouseY > y && mouseY < y + 30) {
		x = floor(random() * (600 - 40));
		y = floor(random() * (400 - 30));

		collected += 1;
	}
}
