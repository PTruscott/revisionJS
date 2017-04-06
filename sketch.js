var fr = 60;

var windowWidth = window.innerWidth.valueOf();
var windowHeight = window.innerHeight.valueOf();

var snapSlider;
var tempArrow;

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
var selection;

function setup() {

	//noinspection JSUnresolvedFunction
    createCanvas(windowWidth, windowHeight);
	//noinspection JSUnresolvedFunction
    frameRate(fr);

    //loadFile();

	questions.push(question);
    questions.push(question2);

    selection = createSelection(0, 0, "lecture", ["csa", "maths", "test"]);

    setCurrentQuestion(question2);
}

function draw() {
	background(colours[0]);

	//noinspection JSUnresolvedFunction
    noStroke();
    //sidepanel
    fill(colours[2]);
	rect(sidepanel[0], sidepanel[1], sidepanel[2], sidepanel[3]);

	selection.draw();

	//noinspection JSUnresolvedFunction
    strokeWeight(0.5);
    textSize(32);
    //noinspection JSUnresolvedVariable
    textAlign(CENTER, CENTER);
    fill("#ffffff");
    text(currentQuestion.question, sidepanel[2]+buffer, buffer, windowWidth-buffer*2-sidepanel[2], windowHeight/2-buffer*2);

    if (currentQuestion.displayAnswer) {
        text(currentQuestion.answer, sidepanel[2]+buffer, windowHeight/2+buffer, windowWidth-buffer*2-sidepanel[2], windowHeight/2-buffer);
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

	selection.click(click);

	if (!insideBox(sidepanel, click)) {
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
/*
function loadFile() {

    if (typeof window.FileReader !== 'function') {
        alert("The file API isn't supported on this browser yet.");
    }
    else {
        fr = new FileReader();
        fr.onload = receivedText;
        fr.readAsText("/home/peran/Downloads/Revision/Security/Security.json");
    }

    function receivedText(e) {
        var lines = e.target.result;
        questions = JSON.parse(lines);
        console.log(questions);
    }
}*/
