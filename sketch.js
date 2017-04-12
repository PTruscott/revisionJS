var fr = 60;

var windowWidth = window.innerWidth.valueOf();
var windowHeight = window.innerHeight.valueOf();

var snapSlider;
var tempArrow;


var currentQuestion = {
	module: "",
	lecture: "",
	question: "",
	answer: "a",
	displayAnswer: false
};

var questions = [];
var selections = [];
var selection;

function setup() {

	//noinspection JSUnresolvedFunction
    createCanvas(windowWidth, windowHeight);
	//noinspection JSUnresolvedFunction
    frameRate(fr);

    questions = getQuestions();
    selections = getSelections(questions);

    setCurrentQuestion(questions[0]);
}

function draw() {
	background(colours[0]);
	//noinspection JSUnresolvedFunction
    noStroke();
    //sidepanel
    fill(colours[2]);
	rect(sidepanel[0], sidepanel[1], sidepanel[2], sidepanel[3]);

	var x = 0;
	var y = 0;
    for (var i = 0; i < selections.length; i++) {
        drawSelection(x, y, selections[i]);
        y += getHeight(selections[i]);
    }

    btnReset.draw();
    btnDone.draw();
    help.draw();

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
}

function mousePressed() {
	//noinspection JSUnresolvedVariable
    var click = [mouseX, mouseY];

    for (var i = 0; i < selections.length; i++) {
        selections[i].click(click);
    }

    if (buttonClick(btnReset, click)) {
        questions = getQuestions();
    }
    else if (buttonClick(btnDone, click)) {
        removeQuestion(currentQuestion);
        selectNewQuestion();
    }
    else if (!clickHelp(help, click) && !insideBox(sidepanel, click)) {
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

function setCurrentQuestion(question) {
    if (typeof question != 'undefined') {
        currentQuestion.answer = question.answer;
        currentQuestion.question = question.question;
        currentQuestion.lecture = question.lecture;
        currentQuestion.module = question.module;
        currentQuestion.displayAnswer = false;
    }
    else {
        currentQuestion.question = "You need to select some questions";
        currentQuestion.answer = "Equally, you may have marked all questions as \"learnt\".";
        currentQuestion.displayAnswer = true;
    }
}

function selectNewQuestion() {
    var tempQuestions = [];
    var activeModules = [];

    for (var i = 0; i < selections.length; i++) {
        var modules = getActiveModules(selections[i]);
        if (modules.length != 0) {
            activeModules.push([selections[i].name].concat(modules));
        }
    }

    for (var j = 0; j < questions.length; j++) {
        for (i = 0; i < activeModules.length; i++) {
            if (activeModules[i][0] === questions[j].module) {
                for (var k = 1; k < activeModules[i].length; k++) {
                    if (activeModules[i][k] === questions[j].lecture) {
                        tempQuestions.push(questions[j]);
                    }
                }
            }
        }
    }

    i = getRandomInt(0, tempQuestions.length-1);
    if (typeof tempQuestions[i] != 'undefined' && tempQuestions[i].question === currentQuestion.question) {
        i = (i+1)%tempQuestions.length;
    }
    setCurrentQuestion(tempQuestions[i]);
}

function removeQuestion(question) {
    var index = -1;
    for (var i = 0; i < questions.length; i++) {
        if (questions[i].answer === question.answer && questions[i].question == question.question) {
            index = i;
            break;
        }
    }
    if (index != -1) {
        questions.splice(index, 1);
    }
}

function getQuestions() {
    return vision.concat(security);
}

function getSelections(questions) {
    var modules = [];
    textSize(24);
    for (var i = 0; i < questions.length; i++) {
        if (questions[i].module === "") {
            questions[i].module = "Unknown";
        }
        if (questions[i].lecture === "") {
            questions[i].lecture = "Unknown";
        }
        questions[i].lecture = shrinkText(questions[i].lecture, buffer*4.3);
        questions[i].module = shrinkText(questions[i].module, buffer*4.3);

        var index = -1;

        for (var j = 0; j < modules.length; j++) {
            if (modules[j][0] === questions[i].module) {
                var index2 = -1;
                for (var k = 1; k < modules[j].length; k++) {
                    if (modules[j][k] === questions[i].lecture) {
                        index2 = k;
                        break;
                    }
                }
                if (index2 === -1) {
                    modules[j].push(questions[i].lecture);
                }
                index = j;
                break;
            }
        }
        if (index === -1) {
            modules.push([questions[i].module, questions[i].lecture]);
        }
    }

    var selections = [];
    for (i = 0; i < modules.length; i++) {
        var name = modules[i][0];
        modules[i].splice(0, 1);
        modules[i].sort();
        selections.push(createSelection(0, subsectionHeight*i, name, modules[i]));
    }

    return selections;
}

function shrinkText(text, maxWidth) {
    if (textWidth(text) > maxWidth) {
        var tempText = text.substring(0, text.length-1);
        while (textWidth(tempText+"...") > maxWidth) {
            tempText = tempText.substring(0, tempText.length-1);
        }
        text = tempText+"...";
    }

    return text;
}
