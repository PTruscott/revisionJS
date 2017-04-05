var subsection = {
    x : 0,
    y : 0,
    width : sideWidth,
    height : buffer*1.5,
    active : true,
    name : "Subsection",
    slider : {
        x:sideWidth-buffer*1.5,
        y:buffer*1.5/2-buffer/4,
        width:buffer,
        height:buffer/2,
        active:true,
        colour: colours[0],
        draw: function() {drawSlider(this)},
        click: function(point) {sliderClick(this, point)}
    },
    draw: function() {drawSubsection(this)},
    click: function(point) {subsectionClick(this, point)}
};

function drawSubsection(ss) {
    fill(colours[1]);
    strokeWeight(0);
    rect(ss.x, ss.y, ss.width, ss.height);
    ss.slider.draw();
    fill("#ffffff");
    strokeWeight(0.5);
    textSize(24);
    //noinspection JSUnresolvedVariable
    textAlign(LEFT, CENTER);
    text(ss.name, ss.x+buffer, ss.y+ss.height/2);

}

function subsectionClick(ss, point) {
    if (insideBox([ss.x, ss.y, ss.x+ss.width, ss.y+ss.height], point)) {
        ss.slider.click(point);
        ss.active = ss.slider.active;
        return true;
    }
    return false;
}


