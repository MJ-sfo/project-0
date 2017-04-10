$( document ).ready(function() {
  var reset  = false;
  var alien = $('#alien').offset();
  // var imgs = getElementsByTagName('#alien');

  $(".button1").click( function() {
    // choose = " ";
    // $( "h3.center-block" ).text(" ");
    // console.log("imgs is: "+ imgs );
    reset = true;
    // imgs.style.top=200px;
    // $('#alien').style.top=200px;
    document.getElementById('alien').style.left= 'auto';
    // document.getElementById("alien").reset();
  } );   //   $(".button1").click


  setInterval(movePlane, 20);
  var keys = {};
  var borderR = false;
  var borderL = false;
  var borderT = false;
  var borderB = false;

  $(document).keydown(function(e) {
     keys[e.keyCode] = true;
     if (reset == true) {
      //  console.log("reset at keydown");
       console.log("alien.left is " + alien.left);
      // alien.left: 200px;
      // alien.top =200px;
      reset = false;
     }
  });

  $(document).keyup(function(e) {
     delete keys[e.keyCode];
  });  // $(document).keyup
  function movePlane() {
    // var strL = $("#alien").animate()[0];
    // var alien = $('#alien').offset();    // moved to top of doc
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
    var alien = $('#alien').offset();
    if (alien.left >= 780 ) {
    console.log('hit right border');
      borderR = true;
    }
    else if (alien.left <= 0 ) {
    console.log('hit left border');
      borderL = true;
    }
    else if (alien.top <= 0 ) {
    console.log('hit top border');
      borderT = true;
    }
    else if (alien.top >= 300 ) {
    console.log('hit bottom border');
      borderB = true;
    }
  }) //    $(window).keydown


});   // this is for all document
// all code to manipulate the DOM
// goes inside this function
