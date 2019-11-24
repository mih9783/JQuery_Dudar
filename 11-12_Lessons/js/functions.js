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

    $("img").not("img[alt]").attr("alt", "это картинка");

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

    // МАНИПУЛИРОВАНИЕ КЛАССАМИ


    // здесь доделать
    // var question = prompt("Какой цвет вам больше нравится зелёный,красный или жёлтый"),
    //     green = "зелёный",
    //     red = "красный",
    //     yellow = "жёлтый";

    // while (question != green && question != yellow && question != red) {
    //     alert("Вы не выбрали цвет");
    //     question = prompt("Какой цвет вам больше нравится зелёный,красный или жёлтый");
    // }

    //  $("#test").attr("class", "test_" + question);


    ///////////////  РАБОТАЕТ //////////////////

    // let Color = prompt("Какой цвет вам больше нравится? green,red или yellow");



    // while (Color != "red" && Color != "green" && Color != "yellow") {
    //     alert("Вы не выбрали цвет");
    //     Color = prompt("Какой цвет вам больше нравится зелёный,красный или жёлтый");
    // }



    // $("#test").attr("class", "test_" + Color);
    // alert($("#test_").get(0).className);

    ///////////////////////

    var question = prompt("Какой цвет вам больше нравится зелёный,красный или жёлтый"),
        green = "зелёный",
        red = "красный",
        yellow = "жёлтый";

    while (question != green && question != yellow && question != red) {
        alert("Вы не выбрали цвет");
        question = prompt("Какой цвет вам больше нравится зелёный,красный или жёлтый");
    }

    if (question === green)
        $("#test").attr("class", "test_" + "green");
    if (question === red)
        $("#test").attr("class", "test_" + "red");
    if (question === yellow)
        $("#test").attr("class", "test_" + "yellow");





    // let div = prompt("Введите 1, 2 или 3");

    // while (div != 1 && div != 2 && div != 3) {
    //     alert("Вы не ввели пароль");
    //     div = prompt("Введите 1, 2 или 3");
    // }

    // $("#test-1").attr ("class", "div_" + div);
    // alert($("#test-1").get(0).className);


    // let div = prompt("Введите 1, 2 или 3"),
    // one = 1,
    // two = 2,
    // three = 3;

    // while (div != one && div != two && div != three) {
    //     alert("Вы не ввели пароль");
    //     div = prompt("Введите 1, 2 или 3");
    // }

    // $("#test-1").attr ("class", "div_" + div);
    // alert($("#test-1").get(0).className);

    // get(0) обращаемся по индексу  к диву #test-1





});



