
function delete_comment_child() {
    $(".comment_child").html("");
}
$(document).ready(function () {

    $(".btn_comment_child").click(function (event) {
        let NameUser = $(event.target).parent().children(".name_comment").html();
        let IdUser = $(event.target).parent().children(".btn_comment_child").children(".id_comment").html();
        console.log(IdUser);
        $(".comment_child").html("");
        $(event.target)
            .parent()
            .parent()
            .parent()
            .children(".comment_child")
            .html(
                '<div class="pl-2"></div>' +
                '<form class="border d-flex flex-column flex-grow-1" action="/" method="get" onsubmit="submitCommentChild(event,'+IdUser+')">' +
                '<div class="d-flex justify-content-between pr-2 pt-1">' +
                '	<div class="d-flex pb-0 m-0 ml-1 pt-1">' +
                '		<p class="fs_0_7 font-weight-bold my-auto pr-1">Phản hồi đến :</p>' +
                '		<p class="my-auto sender_comment fs_0_7">'+NameUser+'</p>' +
                "	</div>" +
                '	<div style="font-size: 0.6rem" class="btn_exit_comment_child" onclick="delete_comment_child()">Hủy</div>' +
                "</div>" +
                '<div class="p-2 d-flex flex-column">' +
                "	<textarea" +
                '		name="content"' +
                '		id=""' +
                '		cols="10"' +
                '		rows="5"' +
                '		class="w-100 fs_0_6 form-control"' +
                '		placeholder="Nội dung bình luận"' +
                "	></textarea>" +
                "</div>" +
                '<div class="d-flex p-2 justify-content-end">' +
                '	<button type="submit" class="btn btn-primary p-1 fs_0_6">Gửi bình luận</button>' +
                "</div>" +
                "</form>"
            );
    });
});
function submitCommentChild(event,id) {
    event.preventDefault();
    alert("id là : "+id)
    // Get some values from elements on the page:
    var $form = $(this),
        term = $form.find("input[name='s']").val(),
        url = $form.attr("action");

    // Send the data using post
    var posting = $.post(url, { s: term });

    // Put the results in a div
    posting.done(function (data) {
        var content = $(data).find("#content");
        $("#result").empty().append(content);
    });
}
