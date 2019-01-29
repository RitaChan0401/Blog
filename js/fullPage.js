$(function(){
    $('#fullpage').fullpage({
        
        navigation: true,
        
      
    
        //Scrolling
        css3: true, //CSS3のeasingを使用。falseでJavaScript使用
        scrollingSpeed: 700, //スクロールのスピード
        autoScrolling: true, //スクロールした際に自動で次の要素を表示
        fitToSection: true, //要素を自動で画面に合わせて調整
        fitToSectionDelay: 1000, //自動で画面に合わせる際のスピード
        scrollBar: true, //ブラウザのスクロールバーの表示
        easing: 'easeInOutCubic', //スクロールアニメーションの種類
        easingcss3: 'ease', //CSS3を使ったスクロールアニメーションの種類
        loopBottom: true, //一番下のコンテンツより下にスクロールしたら最初にループ
        loopTop: false, //一番上のコンテンツより上にスクロールしたら最後にループ
        loopHorizontal: true, //スライドのループ
        continuousVertical: false, //一番上もしくは一番下のコンテンツからさらにスクロールするとループ。loopBottom・loopTopとの併用不可
        continuousHorizontal: false, //スライドのループ
        scrollHorizontally: false, //水平スクロール
        interlockedSlides: false,
        dragAndMove: true, //ドラッグによる移動
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false, //フェードエフェクト
        normalScrollElements: '#element1, .element2', //自動スクロールを無効化したい要素
        scrollOverflow: false, //コンテンツが画面より大きい時にスクロールして表示
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15, //タッチデバイスでのスワイプ感度
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true, //キーボードによるスクロールの操作
        animateAnchor: true, //ページ内リンクのアニメーション有無
        recordHistory: true, //スクロールの履歴をブラウザに記録

     
        //Custom selectors
        sectionSelector: '.section', //セクションのクラス名
        slideSelector: '.slide', //スライドのクラス名
        lazyLoading: true, //遅延ロード

        //events
        onLeave: function(origin, destination, direction){}, //スクロール開始時に呼び出される関数
        afterLoad: function(origin, destination, direction){}, //スクロール完了時に呼び出される関数
        afterRender: function(){}, //ぺージ読み込み時に呼び出される関数
        afterResize: function(){width, height}, //ウインドウサイズのリサイズ時に呼び出される関数
        afterResponsive: function(isResponsive){}, //responsiveWidth・responsiveHeightの条件を満たした時に呼び出される関数
        afterSlideLoad: function(section, origin, destination, direction){}, //スライド開始時に呼び出される関数
        onSlideLeave: function(section, origin, destination, direction){} //スライド完了時に呼び出される関数
    });
});
