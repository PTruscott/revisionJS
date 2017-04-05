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

var currentQuestion = {
	module: "",
	lecture: "",
	question: "",
	answer: "a",
	displayAnswer: false
};

var questions = [];

function setup() {

	//noinspection JSUnresolvedFunction
    createCanvas(windowWidth, windowHeight);
	//noinspection JSUnresolvedFunction
    frameRate(fr);

	questions.push(question);
    questions.push(question2);

    setCurrentQuestion(question2);

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

	//noinspection JSUnresolvedFunction
    noStroke();
    //sidepanel
    fill('#4f4f4f');
	rect(sidepanel[0], sidepanel[1], sidepanel[2], sidepanel[3]);


	snapSlider.draw();

	//noinspection JSUnresolvedFunction
    noStroke();
    textSize(32);
    //noinspection JSUnresolvedVariable
    textAlign(CENTER, CENTER);
    fill("#ffffff");
    text(currentQuestion.question, sidepanel[2]+diameter, diameter, windowWidth-diameter*2-sidepanel[2], windowHeight/2-diameter*2);

    if (currentQuestion.displayAnswer) {
        text(currentQuestion.answer, sidepanel[2]+diameter, windowHeight/2+diameter, windowWidth-diameter*2-sidepanel[2], windowHeight/2-diameter);
    }
/*
    var s = "The quick brown fox jumped over the lazy dog.";
    fill('#ffffff');
    text(s, 10, 10, 70, 80); // Text wraps within text box */
}

function setCurrentQuestion(question) {
	currentQuestion.answer = question.answer;
	currentQuestion.question = question.question;
	currentQuestion.lecture = question.lecture;
	currentQuestion.module = question.module;
    currentQuestion.displayAnswer = false;
}

function selectNewQuestion() {
    var i = getRandomInt(0, questions.length-1);
    setCurrentQuestion(questions[i]);
}

function mousePressed() {
	//noinspection JSUnresolvedVariable
    var click = [mouseX, mouseY];

	var side = snapSlider.click(click);

	if (!side && !insideBox(sidepanel, click)) {
	    if (currentQuestion.displayAnswer) {
            selectNewQuestion();
        }
        else {
	        currentQuestion.displayAnswer = true;
        }
    }

	//noinspection JSUnresolvedFunction
    redraw();
}
