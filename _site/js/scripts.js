
$(window).scroll(function() {
  var ww = document.body.clientWidth;
  if ($(document).scrollTop() > 50) {
      $('.nav').addClass('affix');
  } else {
      $('.nav').removeClass('affix');
  }
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '../assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});


(function($) { // Begin jQuery
  $(function() { // DOM ready

    $('.mobile-nav-dropdown a:not(:only-child)').click(function() {
      $(this).siblings('.mobile-drop-menu').toggle();

//      $('.mobile-drop-menu').not($(this).siblings()).hide();
//      e.stopPropagation();
    });

  }); // end DOM ready
})(jQuery); // end jQuery


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

