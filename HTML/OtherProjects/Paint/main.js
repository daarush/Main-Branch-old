var canvas = document.getElementById("mainCanvas")
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;
var ctx = canvas.getContext("2d");


var firstTime = true
var oldX = 0
var oldY = 0
var newX = 0
var newY = 0


function handler(e) {
    e = e || window.event;

    var pageX = e.pageX - 26;
    var pageY = e.pageY - 25;

    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    drawCircle(pageX, pageY, 5)

    if (firstTime == true) {
        oldX = pageX
        oldY = pageY
        firstTime = false
    } else {
        firstTime = true
        newX = pageX
        newY = pageY
        drawLine(oldX, oldY, newX, newY);
    }
    
}

function degToRad(degrees) {
    return degrees * Math.PI / 180;
  };

function drawCircle(posX, posY, radius) {
    ctx.beginPath();
    circle = ctx.arc(posX, posY, radius, degToRad(0), degToRad(360), false);
    ctx.lineWidth = 3;
    ctx.stroke();
}

function drawLine(startX, startY, endX, endY) {
    var con = 2;
    ctx.moveTo(startX + con, startY + con);
    ctx.lineTo(endX - con, endY - con);
    ctx.stroke();
}

var mainCanvas = document.getElementById("mainCanvas");
mainCanvas.addEventListener("click", handler)

///////////////////////////////////////Buttons/////////////////////////////////////////////////////
function resetFunction() {
    var canvas = document.getElementById("mainCanvas")
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}

var reset = document.getElementById("resetButton")
reset.addEventListener("click", resetFunction)