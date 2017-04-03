var fr = 60;
var diameter = 40;

var windowWidth = window.innerWidth.valueOf();
var windowHeight = window.innerHeight.valueOf();
var sidepanel = [0, 0, diameter*3, windowHeight];

var snapSlider;

var question = {
    module: "security",
    lecture: "lecture",
    question: "question?",
    answer: "answer"
};

var question2 = {
    module: "csa",
    lecture: "lecture2",
    question: "questions?",
    answer: "answers"
};

var questions = [];

function setup() {

	createCanvas(windowWidth, windowHeight);
	frameRate(fr);

	questions.push(question);
    questions.push(question2);

    snapSlider = {
		x:diameter/2,
		y:10+diameter/4,
		width:diameter,
		height:diameter/2,
		active:true,
		colour: 0,
		draw: function() {drawSlider(this)},
		click: function(point) {sliderClick(this, point)}
	};
}

function draw() {
	background('#282828');

	//sidepanel
	noStroke();
	fill('#4f4f4f');
	rect(sidepanel[0], sidepanel[1], sidepanel[2], sidepanel[3]);


	snapSlider.draw();
/*
    textSize(32);
    text("word", 10, 200);
    fill('#ffffff');

    var s = "The quick brown fox jumped over the lazy dog.";
    fill('#ffffff');
    text(s, 10, 10, 70, 80); // Text wraps within text box */
}

function mousePressed() {
	var side = false;

	side = snapSlider.click([mouseX,mouseY]);

	redraw();
}
