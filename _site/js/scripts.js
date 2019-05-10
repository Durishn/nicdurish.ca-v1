/*****************
* Navbar Animation
*****************/
$(window).scroll(function() {
  var ww = document.body.clientWidth;
  if ($(document).scrollTop() > 50) {
      $('.nav').addClass('affix');
  } else {
      $('.nav').removeClass('affix');
  }
});

/*****************
* Particle Animation
*****************/
particlesJS.load('particles-js', '../assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});


/*****************
* Mobile Dropdown Animation
*****************/
(function($) { 
  $(function() {

    $('.mobile-nav-dropdown a:not(:only-child)').click(function() {
      $(this).siblings('.mobile-drop-menu').toggle();

//      $('.mobile-drop-menu').not($(this).siblings()).hide();
//      e.stopPropagation();
    });

  });
})(jQuery);


/*****************
* Parallax Banner Animation
*****************/
function EasyPeasyParallax() {
  scrollPos = $(this).scrollTop();
  $('.banner').css({
    'background-position' : '55% ' 
  });
  $('#bannertext-left').css({
    'margin-top': (scrollPos)+"px",
    'opacity': 1-(scrollPos/150)
  });
  $('#bannertext-right').css({
    'margin-top': (scrollPos)+"px",
    'opacity': 1-(scrollPos/150)
  });
}
$(document).ready(function(){
  $(window).scroll(function() {
    EasyPeasyParallax();
  });
});




