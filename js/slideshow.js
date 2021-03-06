$(function(){
    $(window).on('load',function(){
        var heght = $(window).height();
        $('.slide').css('height',heght+'px');
    });
});

$(function(){
    // .on('load resize'～でロードされたときとリサイズされたときに発動
    $(window).on('load resize',function(){
        var slide = $('.slide'),
            //  $(window).height();でウィンドウの縦幅を取得
            wdHeight = $(window).height();
        //cssを書き換えます
        slide.css({height:wdHeight});
    });
});

$(function(){
    var slide = $('.slide');
    var slide_one = $('.slide>li');
    var slide_one_first = $('.slide li:first-child');


    // .slide>liの数を取得しimgをbackgroundにする
    //  slide_one.lengthで.slide>liの数を取得。liが増えても大丈夫
    var all_li = slide_one.length;

    //新しい配列を作る
    var img_all = [];
    for(var i =0 ; i<=all_li; i++){

        //.slide>liの中にあるimgをそれぞれ取得
        var slide_img = slide_one.eq(i).find('img');
        //imgのsrcを配列に格納
        img_all[i] = slide_img.attr('src');

        //それぞれの.slide>liにimgをbackgroundとして効かせる
        slide_one.eq(i).css('background-image','url('+img_all[i]+')');
    }

    //スライド
    $(window).on('load',function(){

        var fadeSpeed = 5000;
        // 切り替わりの間隔（ミリ秒）
        var switchDelay = 1000;
        //  フェード処理の早さ（ミリ秒）

        //  .slide li:first-childにactiveというclassをつけてshowする
        //  ※cssで予めslide liにはdisplay:noneが掛かっている
        slide_one_first.addClass('active').show();

        setInterval(function(){
            var active = $('.slide  li.active');
            //条件演算子を使って、.slide  li.activeの次にliがあるならそれを指定(true)、
            //ないなら.slide  li:firstを指定(false)
            var next = active.next('li').length?active.next('li'):$('.slide  li:first');

            //activeをfadeOutして、nextをfadeInする
            active.fadeOut(switchDelay).removeClass('active');
            next.fadeIn(switchDelay).addClass('active');
        },fadeSpeed);
    });
});