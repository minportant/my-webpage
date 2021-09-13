$(document).ready(function() {
    $('.menu-btn').on('click', function() {
        $(this).toggleClass('open');
        $('.nav-bar').toggleClass('open');
    });

    $('.nav-bar .nav-link').on('click', function() {
        $('.menu-btn').removeClass('open');
        $('.nav-bar').removeClass('open');
    });

    AOS.init({
        easing: 'ease',
        duration: 1800
    });
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 5000);

$("#slideshow2 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow2 > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow2');
}, 5000);

$("#slideshow3 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow3 > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow3');
}, 5000);

$("#slideshow4 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow4 > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow4');
}, 5000);