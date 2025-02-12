let canvas;

const reasons = [
	"You're empathetic.",
	"You understand so much.",
	"You're funny.",
	"You're cute.",
	"You're pretty.",
	"You take everything into account.",
	"You're my lil cheerleader.",
	"You support me, no matter what.",
	"You don't give up on me, whatsoever.",
	"You pay attention.",
	"You listen, even when I'm being boring",
	"The way you talk.",
	"The way your hands move when you're talking.",
	"How you tell me everything.",
	"The way you love me.",
	"You remember everything.",
	"You match my freak. *lipbite*",
	"You're a goofball.",
	"I can be me with you.",
	"You're you with me.",
	"I can say the randomest bullshit and you won't judge me.",
	"You somehow understand exactly how im feeling.",
	"You describe things you liked to me, another thing that you like.",
	"NICE ASS.",
	"Your voice.",
	"The way you can comfort me, magically.",
	"Your eyes.",
	"How, unbelievably sweet and caring you are.",
	"YOUR CHEEEEEEEEEEEEEEEEEEEKS (all four <3).",
	"Holding your hands.",
	"The way, even if I'm in the wrong, you stand with me.",
	"How you make me confident.",
	"The way you make life worthwhile.",
	"The way you laugh.",
	"Them THUNDER THIGHS (yum).",
	"When you hold my arm.",
	"Our rickshaw rides.",
	"You make the kid inside me spill out.",
	"You're so patient.",
	"You show me sides of life I never could understand.",
	"You understand me, more than me? (how's that work tho, secret ki bolo bolo)",
	"You're divine.",
	"I can tell you whatever I want, without a single ounce of fear of anything.",
	"The way you say 'Hi`.",
	"Your expressions.",
	"Nice tits. *wink*",
	"The way we're both laughing when we're together.",
	"Waste not, want not",
	"You genuinely care.",
	"You make me happy.",
	"How you make my insides warm.",
	"You're also very gulugulu."
];

function setup() {
	canvas = createCanvas(600, 400);
	canvas.parent('canvas-container');
}

var currentText = "";
var currentX = 0;
var currentY = 0;

var i = 0;

function draw() {
	currentText = reasons[i];

	background(220);
	fill(255);
	rect(200, 50, 200, 300, 24);

	textWrap(WORD);
	textAlign(CENTER, CENTER);
	fill(0);

	let lineHeight = textAscent() + textDescent();

	let wrappedText = wrapText(reasons[0], 100);
	let textHeight = lineHeight * wrappedText.length;

	text(currentText, width/2 - 50, (height/2) - (textHeight/2), 100);
}

function wrapText(txt, maxWidth) {
	let words = txt.split(" ");
	let lines = [];
	let currentLine = "";

	for (let word of words) {
		let testLine = currentLine.length === 0 ? word : currentLine + " " + word;
		let testWidth = textWidth(testLine);

		if (testWidth > maxWidth && currentLine.length > 0) {
			lines.push(currentLine);
			currentLine = word;
		} else {
			currentLine = testLine;
		}
	}
	lines.push(currentLine); // Add the last line

	return lines;
}

function mouseClicked() {
	if (i < 51)
		i = i + 1;
}
