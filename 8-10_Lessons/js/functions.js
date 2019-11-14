//  проверяю работу jquery

// $(document).ready(function () {
//     alert('jQuery работает');
// });

// ИЛИ СОКРАЩЁННО

// $(function () {
//     alert('jQuery работает');

// });

$(function () {

    let link = $("a");

    $(".btn_link").click(function () {
        $(".para_link")
            .text("В этом блоке: " + link.length + "ссылок");
    });

    let menuLink = $("#menu li a");

    $(".btn_menu-link").click(function () {
        $(".para_menu-link")
            .text("В этом блоке ссылки в меню выделятся красным цветом")
            .css("color", "red");
        $(menuLink).css("color", "red");
    });

    let firstLink = $("#menu li a:first");

    $(".btn_first-link").click(function () {
        $(".para_first-link")
            .text("В этом блоке первая ссылка в меню выделятся зелёным цветом")
            .css("color", "green");
        $(firstLink).css("color", "green");
    });

    let lastLink = $("#menu li a:last");

    $(".btn_last-link").click(function () {
        $(".para_last-link")
            .text("В этом блоке последняя ссылка в меню выделятся синим цветом")
            .css("color", "blue");
        $(lastLink).css("color", "blue");
    });
    // eq(2) ТРЕТЬЯ ССЫЛКА
    let eqLink = $("#menu li a:eq(2)");

    $(".btn_eq-link").click(function () {
        $(".para_eq-link")
            .text("В этом блоке третья ссылка в меню выделятся золотым цветом")
            .css("color", "rgb(230, 203, 53)");
        $(eqLink).css("color", "rgb(230, 203, 53)");
    });


    // FORM

    function valid() {
        let state = $("input[name = 'sex']:checked").val();

        if (!state) return $("#message").text("Вы не выбрали пол !");
        else $("#message").text(state);

        if (state == "female")
            $(".img_1").show();
        if (state == "male") {
            $(".img_2").show();
            $(".img_1").hide();
        }
    }

    $("#done").click(function () {
        valid();
    });

    // ПОИСК НЕСКОЛЬКИХ ЭЛЕМЕНТОВ

    // первый вариант

    /*
    let test = $("div");
    test += $("p");

    найдём все дивы и параграфы
    */

    /*
    короткая правильная запись
    */

    let elements = $("section, div, li, a, p, img, input, label, button");

    $(".btn_search").click(function () {
        $(".result_search").text("На странице: " + elements.length + "элементов")
            .css("color", "red");
    });
});



