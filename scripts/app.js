$( document ).ready(function() {
  var reset  = false;
  // var alienOrg = $('#alien').offset();

  $(".button1").click( function() {
    reset = true;
    document.getElementById('alien').style.left= 'auto';
    document.getElementById('alien').style.top= 'auto';
  } );   //   $(".button1").click


  setInterval(movePlane, 20);
  var keys = {};
  var borderR = false;
  var borderL = false;
  var borderT = false;
  var borderB = false;
  if (reset == true) {
    console.log("alien position reset " );
   reset = false;
 }   //  if (reset == true)

  $(document).keydown(function(e) {
     keys[e.keyCode] = true;
  });

  $(document).keyup(function(e) {
     delete keys[e.keyCode];
  });  // $(document).keyup

  function movePlane() {
    // var strL = $("#alien").animate()[0];
    var alien = $('#alien').offset();    // moved to top of doc
     for (var direction in keys) {
         if (!keys.hasOwnProperty(direction)) continue;
           if (direction == 37 && !borderL) {
               $("#alien").animate({left: "-=5"}, 0);
                // borderR = false;
                console.log(alien.left);
                borderR = false;
           }
           if (direction == 38 && !borderT) {
               $("#alien").animate({top: "-=5"}, 0);
                console.log(alien.top);
                borderB = false;
           }
           if (direction == 39 && !borderR) {
               $("#alien").animate({left: "+=5"}, 0);
              //  console.log($("#alien").animate({left: "+=5"}, 0));
              //  console.log(strL.x);
                console.log(alien.left);
                borderL = false;
           }
           if (direction == 40 && !borderB) {
               $("#alien").animate({top: "+=5"}, 0);
                console.log(alien.top);
                borderT = false;
           }
     }   // for (var direction in keys
  }  //     function movePlane

  $(window).keydown(function() {
    var alienDown = $('#alien').offset();
    if (alienDown.left >= 780 ) {
    console.log('hit right border');
      borderR = true;
    }
    else if (alienDown.left <= 0 ) {
    console.log('hit left border');
      borderL = true;
    }
    else if (alienDown.top <= 0 ) {
    console.log('hit top border');
      borderT = true;
    }
    else if (alienDown.top >= 300 ) {
    console.log('hit bottom border');
      borderB = true;
    }
  }) //    $(window).keydown


});   // this is for all document
// all code to manipulate the DOM
// goes inside this function
