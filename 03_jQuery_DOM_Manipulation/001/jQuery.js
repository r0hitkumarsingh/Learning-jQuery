$(document).ready(function () {
   
    $("#btn1").click(function () {
        alert("Text: " + $("#para").text());
    });

    $("#btn2").click(function () {
        alert("HTML: " + $("#para").html())
    })



    // ******************************************************************************


    $("#btn3").click(function () {
        alert("Value: " + $("#input1").val());
    });

    // ******************************************************************************

    $("#btn4").click(function(){
        alert($("#gle").attr("href"));
    });
});