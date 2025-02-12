let canvas;

var x1 = 100;
var angle = 0.0;

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

	if (collected >= 7) {
		stroke(0);
		fill(0, 239, 255);
		circle(325, 243, 50);
		circle(325, 157, 50);
		circle(275, 243, 50);
		circle(275, 157, 50);
		circle(250, 200, 50);
		circle(350, 200, 50);

		fill(255);
		circle(width/2, height/2, 100);

		for (let i = 5; i > 0; i--) {
			let rad = i * 10;
			if (i % 2 == 0) {
				fill(0, 239, 255);
				circle(width/2, height/2, rad * 2);
			}
			else {
				fill(247, 255, 0);
				circle(width/2, height/2, rad * 2);
			}

		}
	
		document.getElementById("nextPage").style.display = "block";
	} else {
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

		document.getElementById("nextPage").style.display = "none";
		document.getElementById("flower").style.display = "none";
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
