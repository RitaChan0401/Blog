$(function() {
    var h = $(window).height();
    $('#loader-bg ,#loader').height(h).css('display','block');
});
$(window).load(function () {
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
});


//ハンバーガーメニューをクリックする度にheaderにopenクラスが追加・削除される。
$(function(){
    $('#nav_toggle').click(function(){
        $("header").toggleClass('open');
        $("nav").fadeToggle(500);
    });
});

$(function(){
    $('#scroll').on('click', function(){
        var targetTop = $('#target_point').offset().top;
        $('html,body').animate({
            scrollTop: targetTop
        }, 500);
        return false;
    });
});
