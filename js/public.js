
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


});