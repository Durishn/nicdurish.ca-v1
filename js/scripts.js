
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
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


jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww > 769) {
      $('.nav').removeClass('affix');
    } else if (ww <= 768) {
      $('.nav').addClass('affix');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});