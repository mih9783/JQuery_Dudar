//  проверяю работу jquery

// $(document).ready(function () {
//     alert('jQuery работает');
// });

// ИЛИ СОКРАЩЁННО

// $(function () {
//     alert('jQuery работает');

// });

$(function () {

    //$(".test_style:nth-child(5)").css("background-color", "green");

    // FUNCTION



    $(".btn_4").click(function () {
        $(".test").css("width", "7rem");
        $(".test").css("height", function () {
            return $(this).width();
        });
    });

    $(".btn_5").click(function () {
        $(".test").css("width", "");
        $(".test").css("height", function () {
            return $(this).width();
        });
    });

    $(".test").css("width", "10rem");

    $(".test").css("height", function () {
        let height = prompt("Введите высоту блока в rem(ах)")
        return height + "rem";
    });


    $(".btn_color_3").click(function () {
        $('.test').css({
            "border-radius": '1rem',
            "background-color": "green",
            "border": "none"
        });
    });

    // .html()   и   .text()

    alert($(".test_1").html());
    alert($(".test_1").text());

    // Функция clone()

    /*
    клонируем блок
    */
    let block = $(".test_2").clone();

    /*
    создаём блок clone
    */
    $(".btn_clone").click(function () {
        $(".sect_clone").append(block);
    });

    // Добавление элементов

    /*
    append вставляет в конец кода
    */
    $(".btn_append").click(function () {
        $(".test_3").append("<span>Это новые элементы</span>");
    });

    /*
    ВСТАВИТЬ НЕСКОЛЬКО ЭЛЕМЕНТОВ В ОДИН ИЛИ НЕСКОЛЬКО БЛОКОВ
    */
   $(".btn_appendto").click(function () {
    $("img, .clear").appendTo($(".test_4, .test_5"));
});

/*
    ОБЕРНУТЬ ЭЛЕМЕНТ В ТЕГ
*/

$(".btn_wrap").click(function () {
    $("a").wrap("<p></p>");
});



});



