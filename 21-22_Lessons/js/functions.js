//  проверяю работу jquery

// $(document).ready(function () {
//     alert('jQuery работает');
// });

// ИЛИ СОКРАЩЁННО

// $(function () {
//     alert('jQuery работает');

// });

$(function () {

    $(document).on("click", "#add_comment", function () {
        let form = $("form[name='form']");
        form.css("display", "block");
        // заменяем ссылку на форму
        $("#add_comment").replaceWith(form);
    });

    // берём содержимое textarea и вставляем его в комментарии

    $(document).on("click", "input[name='send']", function () {
        let comment = $("textarea[name='comment']").val();
        alert("Подождите, идёт загрузка комментария ...");
        // Добавляем комменты в конец
        $("<p>" + comment + "</p>").appendTo("#comments");
    });

    function hideComments() {
        $("#comments-1").hide(1000, function () {
            $("#hide").hide();
            $("#show").show();
        });
    }

    function showComments() {
        $("#hide").show();
        $("#show").hide();
        $("#comments-1").show(1000);
    }

    // или так тоже работает

    // function showComments() {
    //     $("#comments-1").show(1000, function () {
    //         $("#hide").show();
    //         $("#show").hide();
    //     });
    // }

    $("#hide").bind("click", hideComments);
    $("#show").bind("click", showComments);



});



