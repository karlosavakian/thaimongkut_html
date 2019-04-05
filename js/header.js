 

$(document).ready(function(){

  $('.navicon').on('click', function() {   
         $('.header-menu').slideToggle('hide-mega-menu'); 
          $(this).toggleClass('navicon-active');
          return false;
          });
          
          
  $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $(".main-header").addClass("scrolled")
    } else {
        $(".main-header").removeClass("scrolled")
    }
});
  
});


 
