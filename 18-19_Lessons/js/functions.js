//  проверяю работу jquery

// $(document).ready(function () {
//     alert('jQuery работает');
// });

// ИЛИ СОКРАЩЁННО

// $(function () {
//     alert('jQuery работает');

// });

$(function () {

    // Создание элементов

    // вставляет в блок перед элементом 

    $(".btn_prepend").click(function () {
        $("<p>Тестовый текст <span style='color: red '>перед текстом</span></p>").prependTo(".test");
    });

    // вставляет в блок после элемента
    $(".btn_append").click(function () {
        $("<p>Тестовый текст <span style='color: red '>после текста</span></p>").appendTo(".test");
    });

    // вставляет элемент перед блоком  
    $(".btn_ins-before").click(function () {
        $("<p>Тестовый текст .insertBefore('.test') перед блоком</p>").insertBefore(".test");
    });

    // вставляет элемент после блока 
    $(".btn_ins-after").click(function () {
        $("<p>Тестовый текст .insertAfter('.test') после блока</p>").insertAfter(".test");
    });

    // Функция val ().

    

    $(".btn_value").click(function () {
        let itog = $("#text").val();
        $(".result").text(itog);
    });
});



