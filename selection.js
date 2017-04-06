function createSelection(x, y, name, modules) {
    var subsections = [];
    var tempY = y;
    for (var i = 0; i < modules.length; i++) {
        tempY+=subsectionHeight;
        var subsection = {
            x : x,
            y : tempY,
            width : sideWidth,
            height : subsectionHeight,
            active : true,
            name : modules[i],
            slider : {
                x:sideWidth-buffer*1.5,
                y:tempY+subsectionHeight/2-buffer/4,
                width:buffer,
                height:buffer/2,
                active:true,
                colour: colours[0],
                draw: function() {drawSlider(this)},
                click: function(point) {sliderClick(this, point)}
            },
            click: function(point) {subsectionClick(this, point)}
        };
        subsections.push(subsection);
    }
    return {
        x: x,
        y: y,
        width: sideWidth,
        baseHeight: subsectionHeight,
        name: name,
        active: true,
        subsections: subsections,
        slider: {
            x: sideWidth - buffer * 1.5,
            y: subsectionHeight / 2 - buffer / 4,
            width: buffer,
            height: buffer / 2,
            active: true,
            colour: colours[0],
            draw: function () {
                drawSlider(this)
            },
            click: function (point) {
                sliderClick(this, point)
            }
        },
        arrow: {
            x:x+buffer/4,
            y: y+subsectionHeight/2-buffer/4,
            radius:buffer/2,
            active:true,
            colour: colours[0],
            draw: function() {drawArrow(this)},
            click:function(point) {arrowClick(this, point)}
        },
        click:function(point) {selectionClick(this, point)},
        getActiveModules: function () {getActiveModules(this)}
    };
}

function getActiveModules(s) {
    var activeModules = [];
    for (var i = 0; i < s.subsections.length; i++) {
        if (s.subsections[i].active) {
            activeModules.push(s.subsections[i].name);
        }
    }
    return activeModules;
}

function selectionClick(s, point) {
    if (s.active) {
        //noinspection JSDuplicatedDeclaration
        for (var i = 0; i < s.subsections.length; i++) {
            var clicked = subsectionClick(s.subsections[i], point);
            if (clicked) {
                s.slider.active = getActiveModules(s).length != 0;
                return true;
            }
        }
    }
    if (insideBox([s.x, s.y, s.x+s.width, s.y+s.height], point)) {
        if (sliderClick(s.slider, point)) {
            //noinspection JSDuplicatedDeclaration
            for (var i = 0; i < s.subsections.length; i++) {
                if (s.slider.active) {
                    s.subsections[i].active = true;
                    s.subsections[i].slider.active = true;
                    console.log("Making active");
                }
                else {
                    s.subsections[i].active = false;
                    s.subsections[i].slider.active = false;
                }
            }
        }
        s.arrow.click(point);
        s.active = s.arrow.active;
        return true;
    }
    return false;
}

function drawSelection(x, y, s) {
    //noinspection JSUnresolvedFunction
    s.x = x;
    s.y = y;
    updateArrowCoords(x+buffer/4, y+subsectionHeight/2-buffer/4, s.arrow);
    updateSliderCoords(x+sideWidth - buffer * 1.5, y+subsectionHeight / 2 - buffer / 4, s.slider);
    noStroke();
    fill(colours[2]);
    strokeWeight(0);
    rect(s.x, s.y, s.width, s.baseHeight);
    s.slider.draw();
    s.arrow.draw();
    fill("#ffffff");
    strokeWeight(0.5);
    textSize(24);
    //noinspection JSUnresolvedVariable
    textAlign(LEFT, CENTER);
    text(s.name, s.x+buffer, s.y+s.baseHeight/2);
    if (s.active) {
        for (var i = 0; i < s.subsections.length; i++) {
            updateSliderCoords(x+sideWidth - buffer * 1.5, y+(i+1)*subsectionHeight+subsectionHeight / 2 - buffer / 4, s.subsections[i].slider);
            drawSubsection(x, y+(i+1)*subsectionHeight, s.subsections[i]);
        }
    }
}

function getHeight(selection) {
    if (selection.active) {
        return (selection.subsections.length+1)*subsectionHeight;
    }
    return subsectionHeight;
}

/*
//An example subsection
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
    click: function(point) {subsectionClick(this, point)}
};
*/

function drawSubsection(x, y, ss) {
    ss.x = x;
    ss.y = y;
    //noinspection JSUnresolvedFunction
    noStroke();
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


