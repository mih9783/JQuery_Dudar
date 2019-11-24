//  проверяю работу jquery

// $(document).ready(function () {
//     alert('jQuery работает');
// });

// ИЛИ СОКРАЩЁННО

// $(function () {
//     alert('jQuery работает');

// });

$(function () {

    // УБИРАЕТ ПРОБЕЛЫ ПЕРЕД И ПОСЛЕ ТЕКСТА

    let str = "         lots of spaces before and after         ";
    $("#original").html("Original String: '" + str + "'");
    $("#trimmed").html("$.trim()'ed: '" + $.trim(str) + "'");

    // ОТБОР ЭЛЕМЕНТОВ ПО ID

    $("#test").click(function () {
        $(this).hide();
    });

    // или 

    $("#test1").click(function () {
        $(".test_id").text("Отбор элементов по ID")
            .css("color", "red");
    });

    // ОТБОР ПО КЛАССУ

    let test = $("div.test");

    $(".btn_class").click(function () {
        for (let i = 0; i < test.length; i++) {
            // лучше вот так
            test.get(i).style.color = "red";

            // или так так хуже
            //test[i].style.color = "blue";
        }
    });


    setTimeout("$('.test').get(6).style.color = 'blue';", 2000);

    // ПРАВИЛЬНО
    // setTimeout(function () {
    //     $(".test").get(6).style.color = "blue";
    // }, 2000);


    $(".btn_first_para").click(function () {
        setTimeout("$('p.test').get(0).style.color = 'red';", 2000);
    });



    $(".btn_fourh_para").click(function () {
        ColorParagraph();
    });

    function ColorParagraph() {
        setTimeout("$('p.test').get(3).style.color = 'green';", 2000);
    }


    // ВЫБОРКА ПО ТЕГАМ И АТРИБУТАМ
    let testTeg = $(".sect_3 div");
    //alert(testTeg.length);


    $(".btn_teg").click(function () {
        $(".result")
            .text("Блок с классом  sect_3 содержит: " + testTeg.length + " дива");
    });

    // ПОИСК ПО АТРИБУТАМ ИСПОЛЬЗУЕТСЯ ЧАЩЕ

    let img =$(".sect_4 img[title]");

    $(".btn_atr").click(function () {
        $(".result_atr")
            .text("В секции sect_4 содержится : " + img.length + " картинки с атрибутом title = 'картинка'");
    });















    // МЕНЯЮ СТИЛИ CSS



    // МЕНЯЮ ТЕКСТ




    // ПОКАЖЕМ СООБЩЕНИЕ




    ///////////////////////////////

    // СКРЫТЬ ПОКАЗАТЬ БЛОК ПРИ НАЖАТИИ КНОПКИ


});



