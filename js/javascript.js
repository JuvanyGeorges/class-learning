
$(document ).ready(function(){  
    
    $( "#menu" ).click(function() {

    alert( "Handler for .click() called." );
    
        $("#navigation-bar").toggleClass("navigation-bar--hidden");
        $("#content").toggleClass("content--no-navigation")
    });
//when The FaB is clicked
$("#button-card-transition").click(function(){
   
    //If blue is faded out 
    if($(".card_blue").hasClass("fade-through-out")){
        $(".card_blue")
    .addClass("fade-through-in")
    .removeClass("fade-through-out");
    
    //fade out red content
    $(".card_red")
    .addClass("fade-through-out")
    .removeClass("fade-through-in");
    }

    //If red is faded out




    //fade in blue content
    $(".card_blue")
    .addClass("fade-through-in");
    
    //fade out red content
    $(".card_red")
    .addClass("fade-through-out");
});
 } );