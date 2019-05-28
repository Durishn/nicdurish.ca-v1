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
  var windowBottom = $(this).scrollTop() + $(this).innerHeight();
  var windowTop = $(this).scrollTop() + $(this).innerHeight() - $(window).height();
  $('#EP-stay-55').css({
    'background-position' : '55% ',
    'opacity': 0 + (scrollPos/300) 
  });
  $('#EP-stay-015').css({
    'background-position' : '55% ',
    'opacity': 0.15 + ((scrollPos)/300) 
  });
  $('#EP-fade-stay').css({
    'margin-top': (scrollPos/2)+"px",
    'opacity': 1-(scrollPos/150)
  });
  $('#EP-slightfade-slow').css({
    'opacity': 0 + (scrollPos)
  });

  $(".fadeinstay").each(function() {
      objectBottom = $(this).offset().top + $(this).outerHeight();
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      }
    });
  $(".fadein").each(function() {
      objectBottom = $(this).offset().top + $(this).outerHeight();
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  $(".fadein-05").each(function() {
      objectMiddle = $(this).offset().top + $(this).outerHeight()/1.5;
      if (objectMiddle < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
  });
  $(".fadein-2").each(function() {
      objectMiddle = $(this).offset().top + $(this).outerHeight()/2;
      if (objectMiddle < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
  });
  $(".fadein-3").each(function() {
      objectMiddle = $(this).offset().top + $(this).outerHeight()/3;
      if (objectMiddle < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
  });
  $(".fadeinout-05").each(function() {
      objectMiddle = $(this).offset().top + $(this).outerHeight()/1.5;
      objectBase = $(this).offset().top + $(this).outerHeight()/1.5;
      if ((objectMiddle < windowBottom) && (objectMiddle > windowTop)) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
  });
  $(".fadeinout-2").each(function() {
      objectMiddle = $(this).offset().top + $(this).outerHeight()/2;
      objectBase = $(this).offset().top + $(this).outerHeight()/1.5;
      if ((objectMiddle < windowBottom) && (objectBase > windowTop)) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
  });
  $(".fadeinout-3").each(function() {
      objectMiddle = $(this).offset().top + $(this).outerHeight()/3;
      objectBase = $(this).offset().top + $(this).outerHeight()/1.5;
      if ((objectMiddle < windowBottom) && (objectBase > windowTop)) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
  });
  $(".fadeout").each(function() {
      /* Check the location of each desired element */
      objectMiddle = $(this).offset().top + $(this).outerHeight()/1.5;
      /* If the element is completely within bounds of the window, fade it in */
      if (objectMiddle > windowTop) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
}

$(document).ready(function(){
  $(window).scroll(function() {
    EasyPeasyParallax();
  });
});


 

