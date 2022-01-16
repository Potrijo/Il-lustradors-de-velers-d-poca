$.status_img = true;

document.body.style.backgroundImage = "url('https://earthsky.org/upl/2018/06/ocean-apr27-2020-Cidy-Chai-North-Pacific-scaled-e1591491800783.jpeg')";

var width = $(document).width() - $('#paperShip').width();
$(document).ready(function() {

    function animateMydiv() {
        $('#paperShip').animate({
                'left': width + 'px'
            }, 9000,

            function() {
                $('#test').css({
                    opacity: 1.0,
                    visibility: "visible"
                }, 9000).animate({
                    opacity: 0
                }, 9000);
            }).animate({
            'left': '0px'
        }, 9000,animateMydiv);
    }
    animateMydiv();
});

var get = document.getElementById("paperShip");
console.log(get)

$("#button").click(function(){
    runEffect();
});

$("#seeRadioButton").on( "click", function() {
    console.log("click");
    $("#menuRadio").slideToggle(300);
});

function runEffect() {

    // get effect type from
    var selectedEffect = $( "#effectTypes" ).val();
    console.log(selectedEffect);
    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    if($.status_img){
        $( "#sortable" ).hide( selectedEffect, options, 1000 );
        $.status_img = false;
    }
    else{
        $( "#sortable" ).show(selectedEffect, options, 1000 );
        $.status_img = true;
    }


  };