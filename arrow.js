//example arrow:
/*
 var arrow = {
 x:10,
 y:10,
 radius:20,
 active:false,
 colour: 0
 draw: function() {drawArrow(this)},
 click:function(point) {arrowClick(arrow, point)},
 }*/

//draws a arrow
function drawArrow(arrow) {
    strokeWeight(3);
    stroke(arrow.colour);

    if (arrow.active) {
        line(arrow.x, arrow.y+arrow.radius/2, arrow.x+arrow.radius/2, arrow.y + arrow.radius);
        line(arrow.x+arrow.radius/2, arrow.y+arrow.radius, arrow.x+arrow.radius, arrow.y + arrow.radius/2);
    }
    else {
        line(arrow.x+arrow.radius/2, arrow.y, arrow.x+arrow.radius, arrow.y + arrow.radius/2);
        line(arrow.x+arrow.radius/2, arrow.y+arrow.radius, arrow.x+arrow.radius, arrow.y + arrow.radius/2);
    }
}

//where arrow is an object, and point is an array where 0=x 1=y
//returns true if clicked and changes state of arrow
function arrowClick(arrow, point) {
    if (circlesBisect(point, 0, [arrow.x+arrow.radius/2, arrow.y+arrow.radius/2, arrow.radius], arrow.radius/2)) {
        arrow.active = !arrow.active;
        return true;
    }

    return false;
}
