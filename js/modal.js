$(function () {
    $( ".modal-btn" ).click(function() {
      $(".overlay").addClass( "open-modal" );  
    });
    
    $( ".close-modal" ).click(function() {
      $(".overlay").removeClass( "open-modal" ); 
         $('.modal-video')[0].pause();
    });

});