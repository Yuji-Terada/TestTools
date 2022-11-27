$(".hide").click(function () {
    $(this).toggleClass('active');
});

$(".hide.active").click(function () {
    $(this).removeClass('active');
});