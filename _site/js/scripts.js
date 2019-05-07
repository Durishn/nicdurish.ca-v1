
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$(function() {
  var $typed = $("#typed");
  $typed.typed({
    strings: [$typed.text()],
    typeSpeed: 50,
    startDelay: 1000
  });
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '../assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
