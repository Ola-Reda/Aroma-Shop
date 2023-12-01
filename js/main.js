$(document).ready(function() {
    //navbar
    // $(window).on("scroll", function() {
    //     if (this.scrollY > 60) {
    //         $("header").addClass("sticky")
    //     } else {
    //         $("header").removeClass("sticky")
    //     }
    // })


    //section product
    $('.owl-carousel:first').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            800: {
                items: 3,
            }
        }
    });



    // $(".silde").hover(function() {
    //     $(".carousel-link").slideToggle(function() {
    //         $('this').animate({
    //             bottom: "100px",
    //             opacity: "0"
    //         }, 200);
    //     });
    // });




    //section best
    $(".owl-carousel:last").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            950: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    })

});