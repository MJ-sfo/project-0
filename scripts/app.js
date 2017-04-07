$( document ).ready(function() {
  console.log( "ready!" );
  //   // console.log( "button.click() called." );
});   // this is for all document
// all code to manipulate the DOM
// goes inside this function

// jsboard.board({ attach: 'game', size: 12x12, style: "checkerboard" });
// jsboard.piece({ text: pieceName [,cssProperties] });
setInterval(movePlane, 20);
var keys = {}
$(document).keydown(function(e) {
   keys[e.keyCode] = true;
});
$(document).keyup(function(e) {
   delete keys[e.keyCode];
});

/// store reference to character's position and element
var alienIcon = {
  x: 180,
  y: 500,
  xMin: -320,
  yMin: 300,
  // speedMultiplier: 10,
  // element: document.getElementById("character")
};
function movePlane() {
   for (var direction in keys) {
       if (!keys.hasOwnProperty(direction)) continue;
       if (direction == 37) {
           $("#alien").animate({left: "-=5"}, 0);
           alienIcon.x -=5;  //= alienIcon.x -5;
           console.log("x is  = " + alienIcon.x);
       }
       if (direction == 38) {
           $("#alien").animate({top: "-=5"}, 0);
           alienIcon.y -=5;  //= alienIcon.x -5;
           console.log("y is  = " + alienIcon.y);
       }
       if (direction == 39) {
           $("#alien").animate({left: "+=5"}, 0);
       }
       if (direction == 40) {
           $("#alien").animate({top: "+=5"}, 0);
       }
   }
}
