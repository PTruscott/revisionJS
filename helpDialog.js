var help = {
    x: windowWidth-buffer,
    y: windowHeight-buffer,
    radius: buffer/2,
    active: false,
    bubbleX: windowWidth-sideWidth-buttonBuffer,
    bubbleY: windowHeight-buffer-subsectionHeight*8,
    bubbleWidth: sideWidth-buttonBuffer,
    bubbleHeight: subsectionHeight*8,
    text: "Welcome to revisionJS!" +
        "\n\n" +
        "This is a tool designed to question you.  On the left questions are sorted by topics and lectures " +
        "and above are two buttons: learnt and reset.\n\n'Learnt' marks a question to not come up again." +
        "\n\n'Reset' resets all learnt questions" +
        "\n\n\nPeran Truscott, \nPTruscott@github.com",
    draw: function() {drawHelp(this)}
};

function drawHelp(help) {
    if (help.active) {
        textSize(20);
        fill(colours[2]);
        rect(help.bubbleX, help.bubbleY, help.bubbleWidth, help.bubbleHeight);

        fill('#ffffff');
        textAlign(LEFT, TOP);
        text(help.text, help.bubbleX+buttonBuffer, help.bubbleY+buttonBuffer, help.bubbleWidth-buttonBuffer*2, help.bubbleHeight-buttonBuffer*2);

        fill(colours[1]);
    }
    else {
        fill(colours[2]);
    }

    textSize(24);
    ellipse(help.x, help.y, help.radius*2, help.radius*2);
    fill('#ffffff');
    textAlign(CENTER, CENTER);
    text("?", help.x, help.y);
}

function clickHelp(help, point) {
    if (help.active) {
        if (insideBox([help.bubbleX, help.bubbleY, help.bubbleX+help.bubbleWidth, help.bubbleY+help.bubbleHeight], point)) {
            help.active = false;
            return true;
        }
    }
    if (circlesBisect([help.x, help.y], help.radius, point, 0)) {
        help.active = !help.active;
        return true;
    }
}