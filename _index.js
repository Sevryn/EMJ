var lFace = [0, 1, 2, 3];
var rFace = [2, 3, 0, 1];
var faceNames = ["diamond_face","heart_face","club_face","spade_face"];

var fi = -1;
reFace = [ 1100, 2200, 3300, 4400];
faceSec = [ 1, 2, 3, 4];
$(document).ready(function () {

    changeFaces();
    var lVal = 1;
    var rVal = 1;

    var scrollPos;
    var changed = 1;

    $(window).scroll(function () {
        changeFaces();
    });

});

function changeFaces() {

    for (i = 0; i < 4; i++) {
        if ($(window).scrollTop() <= reFace[i]) {
            fi = i;
            break;
        }

    }

    $("#leftFace").css('background-image', 'url("pics/' + faceNames[lFace[fi]] + '_L.png")');
    $("#rightFace").css('background-image','url("pics/' + faceNames[ rFace[ fi ]] + '.png")');
}