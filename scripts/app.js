$( document ).ready(function() {
  console.log( "ready!" );
  //   // console.log( "button.click() called." );
});   // this is for all document
// all code to manipulate the DOM
// goes inside this function

// jsboard.board({ attach: 'game', size: 12x12, style: "checkerboard" });
// jsboard.piece({ text: pieceName [,cssProperties] });
setInterval(movePlane, 20);
var keys = {};
var borderR = false;
var borderL = false;
var borderT = false;
var borderB = false;
$(document).keydown(function(e) {
   keys[e.keyCode] = true;
});
$(document).keyup(function(e) {
   delete keys[e.keyCode];
});  // $(document).keyup
function movePlane() {
   for (var direction in keys) {
       if (!keys.hasOwnProperty(direction)) continue;
       if (direction == 37 && !borderL) {
           $("#alien").animate({left: "-=5"}, 0);
       }
       if (direction == 38 && !borderB) {
           $("#alien").animate({top: "-=5"}, 0);
       }
       if (direction == 39 && !borderR) {
           $("#alien").animate({left: "+=5"}, 0);
           var strL = $("#alien").animate({left: "+=5"}, 0)[0];
           console.log(strL.x);
          //  strL.x = 100;
          //  console.log(strL.x);
       }
       if (direction == 40 && !borderT) {
           $("#alien").animate({top: "+=5"}, 0);
       }
   }
}  // function movePlane

$(window).keydown(function() {
        var alien = $('#alien').offset();
        if (alien.left >= 900 ) {
        console.log('hit right border')
          borderR = true;
          // TODO have the alert one show once
          console.log('you made it'); // $('body').replacewith
        }
        else {

        }
    }) //    $(window).keydown
