$('.shoppingCart__logo').hover(function() {
    $('.header__hover-block').show("slow");
});

$('.header__hover-block').hover(function() {
    $('.header__hover-block').hide("slow");
});


$("#toogle__btn").click(function() {
    $('#toogle__menu').toggle();
});
$(document).on('click', function(e) {
    if (!$(e.target).closest("#toogle__btn").length) {
        $('#toogle__menu').hide();
    }
    e.stopPropagation();
});