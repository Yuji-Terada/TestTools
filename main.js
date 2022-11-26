$(".hide").click(function () {
    $(this).toggleClass('active');
});

$(".hide.active").click(function () {
    $(this).removeClass('active');
});

$(".changebutton").click(function(){
    $(".hide").toggleClass('active');
    $(".changebutton").toggleClass('active');
    $(".changebutton-x").toggleClass('active');
});

$(".changebutton-x").click(function(){
    $(".hide").removeClass('active');
    $(".changebutton").removeClass('active');
    $(".changebutton-x").removeClass('active');
});





$(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});