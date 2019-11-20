//  проверяю работу jquery

// $(document).ready(function () {
//     alert('jQuery работает');
// });

// ИЛИ СОКРАЩЁННО

// $(function () {
//     alert('jQuery работает');

// });



$(function () {

    //alert('jQuery работает');

    // Обработчик событии


    //function incSize(event) {
    //let target = $(event.target)

    //alert(target.closest(".test").width());
    //alert($(event.target).closest(".test").width());
    //}

    // .bind() устаревший метод
    // $(".test").bind("click", incSize);

    // .on() современный

    // $(".test").on("click", incSize);

    // $(".test").on("click", (function () {
    //     let  width = $(event.target).closest(".test").width();
    //  })

    $(".test").on("click", (function () {
        let width = $(event.target).closest(".test").width();

        event.target.style.width = (width + 50) + "px";

        // отменить функц on() т.е. оно сработает один раз
        //$(event.target).off('click');

        $("<p>" + "Координаты мышки при нажатии: x - " + event.screenX + ", y - " + event.screenY + "</p>").insertAfter(".test:last");

    }));

    // function on()

    $(document).on("click", "p", function () {
        //alert("test");
        $("p").css("color", "red")
            .css("cursor", "pointer");
    });






});



