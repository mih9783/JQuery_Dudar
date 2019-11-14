//  проверяю работу jquery

// $(document).ready(function () {
//     alert('jQuery работает');
// });

// ИЛИ СОКРАЩЁННО

// $(function () {
//     alert('jQuery работает');

// });

$(function () {

    // not - отрицание
    // attr() - добавить атрибут или узнать значение атрибута

    $(":not(img[alt])").attr("alt", "картинка");

    // длинная запись
    // $("img").not("img[alt]").attr("alt", "это картинка");

    // ПРОСМОТР АТРИБУТОВ


    $(".btn_img-alt").click(function () {
        let elem = $("img");
        let text = " ";

        for (let i = 0; i < elem.length; i++)
            text += elem[i].alt + ",  ";
        $(".result").text(text);
    });

    /*
    Если выводим класс то обращаемся className
    */

   $(".btn_para").click(function () {
    let elem = $(".para");
    let text = " ";

    for (let i = 0; i < elem.length; i++)
        text += elem[i].className + ",  ";
    $(".result_para").text(text);
});



});



