$(".read-more").click(function(){
  var me = $(this).toggleClass("open"),
      txt = me.is('.open') ? 'Hide' : 'Read More';
  $(me.attr("href")).toggleClass("active");
  me.text(txt);
}); 

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
* Timeline Animations
*****************/
$('.content').each( function(i){
  
  var bottom_of_object= $(this).offset().top + $(this).outerHeight();
  var bottom_of_window = $(window).height();
  
  if( bottom_of_object > bottom_of_window){
    $(this).addClass('hidden');
  }
});

$(window).scroll( function(){
    /* Check the location of each element hidden */
    $('.hidden').each( function(i){
      
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
      
        /* If the object is completely visible in the window, fadeIn it */
        if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},700);
        }
    });
});


/*****************
* Particle Animation
*****************/
particlesJS.load('particles-js', '../assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

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


 

