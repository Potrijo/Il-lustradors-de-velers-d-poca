$.status_img = true;


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
    if($.status_img){
        $("#overview").hide("slow");
        $.status_img = false;
    }
    else{
        if($("#radio1").is(":checked")){
            $("#overview").show("slow");
            
        }
        else if($("#radio2").is(":checked")){
            $("#overview").grayscale("slow");
        }
        $.status_img = true;
    }
    
});

$("#seeRadioButton").on( "click", function() {
    console.log("click");
    $("#menuRadio").slideToggle(300);
});