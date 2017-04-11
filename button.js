var btnReset = {
    x: windowWidth-buffer*4-buttonBuffer,
    y: buttonBuffer,
    width: buffer*4,
    height: buttonHeight,
    name: "Reset",
    draw: function() {drawButton(this)}
};

var btnDone = {
    x: windowWidth-buffer*4-buttonBuffer,
    y: subsectionHeight+buttonBuffer,
    width: buffer*4,
    height: buttonHeight,
    name: "Learnt",
    draw: function() {drawButton(this)}
};

function drawButton(button) {
    //noinspection JSUnresolvedFunction
    noStroke();
    fill(colours[2]);
    strokeWeight(0);
    rect(button.x, button.y, button.width, button.height);
    fill("#ffffff");
    strokeWeight(0.5);
    textSize(24);
    //noinspection JSUnresolvedVariable
    textAlign(CENTER, CENTER);
    text(button.name, button.x+button.width/2, button.y+button.height/2);
}

function buttonClick(button, point) {
    return !!insideBox([button.x, button.y, button.x + button.width, button.y + button.height], point);

}