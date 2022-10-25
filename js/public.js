
$(document).ready(function(){

    var hiddenBox = $( "#form_search" );
    $( ".show_form_search" ).on( "click", function( event ) {
        hiddenBox.show();
        alert("đã chạy");
        console.log("oke");
    });

});