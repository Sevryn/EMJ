var lFace = [0, 1, 2, 3];
var rFace = [2, 3, 0, 1];
var faceNames = ["diamond_face","heart_face","club_face","spade_face"];

var fi = -1;

$(document).ready(function () {



    changeFaces();
    var lVal = 1;
    var rVal = 1;

    var scrollPos;
    var changed = 1;

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1100 && changed != 2) {
            changed = 2;
            changeFaces();
        }

        if ($(this).scrollTop() < 1100 && changed == 2) {
            changed = 1;
            changeFaces();
        }
    });

});

/*
function changeFaces() {
    fi++;
    if (fi > 3) { fi -= 4; }
    for (i = 1; i <= 4; i++) {
        $("#lFace"+i).css({ "opacity": "0.0" });
        $("#rFace"+i).css({ "opacity": "0.0" });
    }
    lVal = lFace[fi];
    rVal = rFace[fi];

    $("#lFace" + lVal).css({ "opacity": "1.0" });
    $("#rFace" + rVal).css({ "opacity": "1.0" });
}*/
function changeFaces() {
    fi++;

    if (fi > 3) fi -= 4;

    $("#leftFace").css('background-image', 'url("pics/' + faceNames[lFace[fi]] + '_L.png")');
    
    $("#rightFace").css('background-image','url("pics/' + faceNames[ rFace[ fi ]] + '.png")');
}
