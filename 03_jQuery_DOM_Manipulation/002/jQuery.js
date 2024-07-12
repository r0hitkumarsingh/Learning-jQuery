$(document).ready(function () {
    
    $(".btn1").click(function (){
        $("#para1").text("Hii, I'm Rohit kumar");
    });

    $(".btn2").click(function () {
        $("#para2").html("and I'm <b> Web Developer!!!</b>")
    });

    $(".btn3").click(function () {
        $("#input1").val("Rohit kumar");
    });


    $("#btn4").click(function () {
        $("#a-tag").attr("href", "https://bing.com");
    });

    // $("#btn4").click(function () {
    //     $("#para4").text("https://bing.com");
    // });

    $("#btn4").click(function () {
        $("#a-tag").attr({
            "href": "https://bing.com",
            "title": "Go to Bing.com"
        });
    });


    // *******************************************************************************

    
});