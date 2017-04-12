var help = {
    x: windowWidth-buffer,
    y: windowHeight-buffer,
    radius: buffer/2,
    active: false,
    text: "Here is some example help!",
    draw: function() {drawHelp(this)}
};

function drawHelp(help) {
    if (help.active) {
        fill(colours[1])
    }
    else {
        fill(colours[2])
    }

    ellipse(help.x, help.y, help.radius*2, help.radius*2);
    fill('#ffffff');
    textAlign(CENTER, CENTER);
    text("?", help.x, help.y);
}

function clickHelp(help, point) {
    if (help.active) {

    }
    if (circlesBisect([help.x, help.y], help.radius, point, 0)) {
        help.active = !help.active;
        return true;
    }
}