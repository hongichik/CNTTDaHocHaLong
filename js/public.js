
$(document).ready(function () {
    $("#show_form_search").on("click", function (event) {
        //$( ".form_search" ).toggleClass( "d-none" )
        $(".form_search").toggleClass("d-flex")
        $(".form_search").animate({ width: '14rem', opacity: 1 }, "slow");

    });
    $("#close_form_search").on("click", function (event) {
        $(".form_search").animate({ width: '0rem', opacity: 0 }, "slow")
            .queue(function () {
                $(".form_search").toggleClass("d-flex").dequeue();
            });
    });

        $('.customer-logos').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover:false,
            responsive: [{
                breakpoint: 768,
                setting: {
                    slidesToShow:4
                }
            }, {
                breakpoint: 520,
                setting: {
                    slidesToShow: 3
                }
            }]
        });
});
