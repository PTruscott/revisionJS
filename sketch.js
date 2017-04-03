var fr = 60;
var diameter = 40;

var gridSize;
var windowWidth = window.innerWidth.valueOf();
var windowHeight = window.innerHeight.valueOf();

var snapSlider;
var playSlider;

function setup() {
	strokeWidth = 6;
	
	createCanvas(windowWidth, windowHeight);
	frameRate(fr);

	var h = windowHeight;
	h -= strokeWidth;
	h -= diameter;
	gridSize = (h)/15;

  	snapSlider = {
		x:diameter/2-strokeWidth/2,
		y:10+diameter/4,
		width:diameter+strokeWidth,
		height:diameter*4/7,
		active:true,
		colour: 0,
		draw: function() {drawSlider(this)},
		click: function(point) {sliderClick(this, point)},
	};
	playSlider = {
		x:diameter*4,
		y:10+diameter/4,
		width:diameter+strokeWidth,
		height:diameter*4/7,
		active:true,
		colour: "#ff0000",
		draw: function() {drawSlider(this)},
		click: function(point) {sliderClick(this, point)},
	}

}

function draw() {
	background('#282828');

	//sidepanel
	noStroke();
	fill('#4f4f4f');
	rect(0, 0, 200, windowHeight);

	snapSlider.draw();
	playSlider.draw();
}

function mousePressed() {
	var side = false;

	snapSlider.click([mouseX,mouseY]);
	playSlider.click([mouseX,mouseY]);

	redraw();
}
