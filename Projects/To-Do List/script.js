$(document).ready(function () {
    
    $("#add-task").click(function () {
        let taskText = $("#new-task").val()
        if (taskText != '') {
            $("#task-list").append('<li>' + taskText + '<span class="close">×</span></li>');

            $("#new-task").val('');
        }   
    });


    $("#task-list").on('click', 'li', function () {
        $(this).toggleClass('completed');
    });

    $("#task-list").on('click', '.close', function (event) {
        event.stopPropagation();
        $(this).parent().remove();
    })
})