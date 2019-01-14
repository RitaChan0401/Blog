$(function(){
    setElm = $('.slideshow'); //フルスクリーンスライドショー全体を囲うブロック要素
    fadeSpeed = 1000; //フェードアニメーションスピード
    switchDelay = 5000; //スライドアニメーション待機時間
    easing = 'linear'; //スライドする際のイージング
    ua = navigator.userAgent;
    $(window).load(function(){
        setElm.each(function(){
            const targetObj = $(this),
                findUl = targetObj.find('ul'),
                findLi = findUl.find('li'),
                findLiCount = findLi.length,
                findLiFirst = findUl.find('li:first');
            findLi.each(function(i){
                $(this).attr('class','viewList' + (i + 1).toString());
            });
            findLi.css({display:'block',opacity:'0',zIndex:'99'});
            findLiFirst.addClass('mainActive').css({zIndex:'100'}).stop().animate({opacity:'1'},fadeSpeed);
            if(findLiCount > 1){
                const pagination = $('<div class="pagiNation"></div>');
                targetObj.append(pagination);
                findLi.each(function(i){
                    pagination.append('<a href="javascript:void(0);" class="pn'+(i+1)+'"></a>');
                });
                const pnPoint = pagination.children('a'),
                    pnFirst = pagination.children('a:first');
                pnFirst.addClass('pnActive');
                pnPoint.click(function(){
                    clearInterval(setAutoTimer);
                    var setNum = pnPoint.index(this),
                        showCont = setNum+1;
                    findUl.find('.viewList' + (showCont)).siblings().removeClass('mainActive').stop().animate({opacity:'0'},fadeSpeed,function(){$(this).css({zIndex:'99'});});
                    findUl.find('.viewList' + (showCont)).addClass('mainActive').stop().animate({opacity:'1'},fadeSpeed,function(){$(this).css({zIndex:'100'});});
                    pnPoint.removeClass('pnActive');
                    $(this).addClass('pnActive');
                    fadeTimer();
                });
                function switchNext(){
                    var setActive = pagination.find('.pnActive');
                    setActive.each(function(){
                        var pnLengh = pnPoint.length,
                            pnIndex = pnPoint.index(this),
                            pnCount = pnIndex+1;
                        if(pnLengh === pnCount){
                            pnFirst.click();
                        } else {
                            $(this).next('a').click();
                        }
                    });
                }
                function fadeTimer(){
                    setAutoTimer = setInterval(function(){
                        switchNext();
                    },switchDelay);
                }
                fadeTimer();
            }
            // メイン画像をベースにエリアの幅と高さを設定
            const setLiImg = findLi.find('img'),
                baseWidth = setLiImg.width(),
                baseHeight = setLiImg.height(),
                selfWH = baseWidth / baseHeight;

            // フルスクリーン（レスポンシブ）動作メイン
            function setArea(){
                let wdWidth = $(window).width(),
                    wdHeight = $(window).height(),
                    rwdHeight = wdWidth / selfWH;
                if(rwdHeight < $(window).height()){
                    rwdHeight = $(window).height();
                    wdWidth = rwdHeight * selfWH;
                }
                targetObj.css({height:wdHeight});
                findUl.css({marginTop:-rwdHeight/2,marginLeft:-wdWidth/2,width:wdWidth,height:rwdHeight});
                findLi.css({height:rwdHeight});
            }
            $(window).resize(function(){setArea();}).resize();
            $('body').css({visibility:'visible'});
        });
    });
});