$("#toogle__btn").click(function() {
    $('#toogle__menu').toggle();
});
$(document).on('click', function(e) {
    if (!$(e.target).closest("#toogle__btn").length) {
        $('#toogle__menu').hide();
    }
    e.stopPropagation();
});

// $( document ).ready(function(){
//     $(".nav__btn").click(function() { // Тут класс твоей кнопки
//         $('.nav__menu__cont').toggle(300);  // Тут класс твоего меню, предварительно оно "display:none"
//     });
//     $(".menu__close__img").click(function() { // Тут класс твоей кнопки
//         $('.nav__menu__cont').toggle(500);  // Тут класс твоего меню, предварительно оно "display:none"
//     });
// });