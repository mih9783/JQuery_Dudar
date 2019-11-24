//  проверяю работу jquery

// $(document).ready(function () {
//     alert('jQuery работает');
// });

// ИЛИ СОКРАЩЁННО

// $(function () {
//     alert('jQuery работает');

// });

$(function () {

    function hideComments() {
        $("#comments").hide(1000, function () {
            $("#hide").hide();
            $("#show").show();
        });
    }

    function showComments() {
        $("#hide").show();
        $("#show").hide();
        $("#comments").show(1000);
    }

    // или так тоже работает

    // function showComments() {
    //     $("#comments").show(1000, function () {
    //         $("#hide").show();
    //         $("#show").hide();
    //     });
    // }

    $("#hide").bind("click", hideComments);
    $("#show").bind("click", showComments);

    // красивая анимация  

    function hideComment() {
        $("#comment").slideUp(1000, function () {
            $("#hide-1").hide();
            $("#show-1").show();
        });
    }

    function showComment() {
        $("#hide-1").slideDown();
        $("#show-1").hide();
        $("#comment").show(1000);

    }

    $("#hide-1").bind("click", hideComment);
    $("#show-1").bind("click", showComment);

    function hideComment1() {
        $("#comment-2").fadeOut(1000, function () {
            $("#hide-2").hide();
            $("#show-2").show();
        });
    }

    function showComment1() {
        $("#hide-2").fadeIn();
        $("#show-2").hide();
        $("#comment-2").show(1000);

    }

    $("#hide-2").bind("click", hideComment1);
    $("#show-2").bind("click", showComment1);

    // 24 урок. Анимация

    $("#img").bind("click", function (event) {
        $(event.target).animate({
            width: $(event.target).width() * 4,
            //height: $(event.target).width() * 5

        }, 5000);
    });

    $(document).on("click", "#img-1", function () {
        $(event.target).animate({
            width: $(event.target).width() * 4,
        }, 5000);
    });



});



