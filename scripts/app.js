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
$(document).keydown(function(e) {
   keys[e.keyCode] = true;
});
$(document).keyup(function(e) {
   delete keys[e.keyCode];
});  // $(document).keyup
function movePlane() {
   for (var direction in keys) {
       if (!keys.hasOwnProperty(direction)) continue;
       if (direction == 37) {
           $("#alien").animate({left: "-=5"}, 0);
       }
       if (direction == 38) {
           $("#alien").animate({top: "-=5"}, 0);
       }
       if (direction == 39 && !borderR) {
           $("#alien").animate({left: "+=5"}, 0);
       }
       if (direction == 40) {
           $("#alien").animate({top: "+=5"}, 0);
       }
   }
}  // function movePlane

$(window).keydown(function() {
        var alien = $('#alien').offset();
        if (alien.left >= 900 ) {
        console.log('hit right border')
          console.log(borderR);
          borderR = true;
          console.log(borderR);
          // TODO have the alert one show once
          console.log('you made it'); // $('body').replacewith
        }
        else {

        }
    }) //    $(window).keydown
