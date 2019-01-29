//ハンバーガーメニューをクリックする度にheaderにopenクラスが追加・削除される。
$(function(){
    $('#nav_toggle').click(function(){
        $("header").toggleClass('open');
        $("nav").fadeToggle(500);
    });
});