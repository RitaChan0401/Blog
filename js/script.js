$(function() {
    var h = $(window).height();
    $('#loader-bg ,#loader').height(h).css('display','block');
});
$(window).load(function () {
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
});


