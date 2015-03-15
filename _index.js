var lFace = [0, 1, 2, 3];
var rFace = [2, 3, 0, 1];
var faceNames = ["diamond_face","heart_face","club_face","spade_face"];

var fi = -1;
reFace = [ 1100, 2200, 3300, 4400];
faceSec = [1, 2, 3, 4];

var msg = null;
msg = new XMLHttpRequest();

$(document).ready(function () {

    changeFaces();
    var lVal = 1;
    var rVal = 1;

    var scrollPos;
    var changed = 1;

    $(window).scroll(function () {
        changeFaces();
    });

    $("#requestForm").submit(function (event) {
        event.preventDefault();
        var output = "";
        output += $("#nameForm").val() + '\n';
        output += $("#contactForm").val() + '\n';
        output += $("#addressForm").val() + '\n';
        output += getRadioVal(document.getElementById('requestForm'), 'jobType') + '\n';
        output += $("#requestBox").val();
        
        msg.open("POST", '/myapp', false);
        msg.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        msg.setRequestHeader("Content-length", output.length);
        msg.setRequestHeader("Connection", "close");

        msg.onreadystatechange = function () {
            if (msg.readyState == 4 && msg.status == 200) {
                alert("Message Sent!");
            }
            else {
                alert("boo?");
            }

        }

        msg.send(output);

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

function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];

    // loop through list of radio buttons
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}