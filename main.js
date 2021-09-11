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
        duration: 1800,
        once: true
    });
});