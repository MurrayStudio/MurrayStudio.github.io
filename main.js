var main = function () {

    var shown = false;
    var topOfWindow = $(window).scrollTop();

    $('#carousel').addClass("expandOpenEdit");

    $(window).scroll(function () {


        if ($(window).scrollTop() == 0) {
            $('.logo').animate({
                height: "60px"
            }, {
                duration: 300,
                queue: false
            });

            $('.logo').animate({
                width: "60px"
            }, {
                duration: 300,
                queue: false
            });

            $('.logo').animate({
                marginTop: "10px"
            }, {
                duration: 300,
                queue: false
            });

            $('.logo').animate({
                marginBottom: "10px"
            }, {
                duration: 300,
                queue: false
            });

            $('.navbar-brand').animate({
                marginTop: "15px"
            }, {
                duration: 300,
                queue: false
            });

            $('.navbar-brand').animate({
                marginBottom: "10px"
            }, {
                duration: 300,
                queue: false
            });

            $('.navbar-brand').animate({
                fontSize: "42px"
            }, {
                duration: 300,
                queue: false
            });

            $('#navbar a').animate({
                fontSize: "20px"
            }, {
                duration: 300,
                queue: false
            });

            $('#link-container').animate({
                marginTop: "15px"
            }, {
                duration: 300,
                queue: false
            });

            $('#link-container').animate({
                marginBottom: "10px"
            }, {
                duration: 300,
                queue: false
            });

            $('button.navbar-toggle').animate({
                marginTop: "25px"
            }, {
                duration: 300,
                queue: false
            });

            $('button.navbar-toggle.collasped').animate({
                marginTop: "25px"
            }, {
                duration: 300,
                queue: false
            });

            shown = false;
        } else if ($(window).scrollTop() > 0 && !shown) {
            $('.logo').animate({
                height: "35px"
            }, {
                duration: 300,
                queue: false
            });

            $('.logo').animate({
                width: "35px"
            }, {
                duration: 300,
                queue: false
            });

            $('.logo').animate({
                marginTop: "10px"
            }, {
                duration: 300,
                queue: false
            });

            $('.logo').animate({
                marginBottom: "0px"
            }, {
                duration: 300,
                queue: false
            });

            $('.navbar-brand').animate({
                marginTop: "2px"
            }, {
                duration: 300,
                queue: false
            });

            $('.navbar-brand').animate({
                marginBottom: "2px"
            }, {
                duration: 300,
                queue: false
            });

            $('.navbar-brand').animate({
                fontSize: "32px"
            }, {
                duration: 300,
                queue: false
            });

            $('#navbar a').animate({
                fontSize: "18px"
            }, {
                duration: 300,
                queue: false
            });

            $('#link-container').animate({
                marginTop: "3px"
            }, {
                duration: 300,
                queue: false
            });

            $('#link-container').animate({
                marginBottom: "1px"
            }, {
                duration: 300,
                queue: false
            });

            $('button.navbar-toggle').animate({
                marginTop: "10px"
            }, {
                duration: 300,
                queue: false
            });

            $('button.navbar-toggle.collasped').animate({
                marginTop: "10px"
            }, {
                duration: 300,
                queue: false
            });

            shown = true;
        }

        $('#first.image').each(function () {
            var imagePos2 = $(this).offset().top;

            topOfWindow = $(window).scrollTop();
            if (imagePos2 < topOfWindow + 500) {
                $('#first.image').addClass("slideLeft");
            }
        });

        $('#second.image').each(function () {
            var imagePos2 = $(this).offset().top;

            topOfWindow = $(window).scrollTop();
            if (imagePos2 < topOfWindow + 500) {
                $('#second.image').addClass("slideRight");
            }
        });

        $('#third.image').each(function () {
            var imagePos2 = $(this).offset().top;

            topOfWindow = $(window).scrollTop();
            if (imagePos2 < topOfWindow + 500) {
                $('#third.image').addClass("slideLeft");
            }
        });

    });

    //if page loads in middle, load the animations without scolling

    $('#first.image').each(function () {
        var imagePos2 = $(this).offset().top;

        topOfWindow = $(window).scrollTop();
        if (imagePos2 < topOfWindow + 500) {
            $('#first.image').addClass("slideLeft");
        }
    });

    $('#second.image').each(function () {
        var imagePos2 = $(this).offset().top;

        topOfWindow = $(window).scrollTop();
        if (imagePos2 < topOfWindow + 500) {
            $('#second.image').addClass("slideRight");
        }
    });

    $('#third.image').each(function () {
        var imagePos2 = $(this).offset().top;

        topOfWindow = $(window).scrollTop();
        if (imagePos2 < topOfWindow + 500) {
            $('#third.image').addClass("slideLeft");
        }
    });

}

$(document).ready(main);