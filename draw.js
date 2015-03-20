speed(0);
record();
reset();
hide();



$("#button-save").on("click",function() {
 downloadRecording();
});

$("#button-replay").on("click",function() {
 speed(300)
 replay();
 speed(0)
});

$("#button-eraser").on("click",function() {
  $(".tool.selected").removeClass("selected");
  $(this).addClass("selected");
  tool = "eraser";
 lineWidth(30);
 lineColor("white");
});

$("#button-pen").on("click",function() {
  $(".tool.selected").removeClass("selected");
  $(this).addClass("selected");
  tool = "pen";
 lineWidth(width);
 lineColor(color);
});

$("#button-triangle").on("click",function() {
 $(".tool.selected").removeClass("selected");
 $(this).addClass("selected");
 tool = "triangle";
 lineWidth(width);
 lineColor(color);
});


function triangle() {
  angle(0);
  forward(50);
  rotate(120);
  forward(50);
  rotate(120);
  forward(50);
  rotate(120);
}


var drawing = false;
var tool = "pen";

var color = "black";
var width = 4;

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "pen" || tool =="eraser" ) { 
    drawing = true;
  } else if(tool == "triangle") {
    triangle();
  }
});


$(document).on("mousemove",function(e) {
  e.preventDefault();
  if(drawing) {
    lineTo(e.pageX,e.pageY);
  }
});

$(document).on("mouseup",function(e) {
  e.preventDefault();
  drawing = false;
});





