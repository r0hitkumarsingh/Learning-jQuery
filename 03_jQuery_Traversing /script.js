$(document).ready(function () {


    // $("span").parents().css({
    //     "color": "red",
    //     "border": "2px solid red"
    // });



    // $("span").parents(".great-parent").css({
    //     "color": "red",
    //     "border": "2px solid red"
    // });
    
    //*********************** jQuery parentsUntil() Method **************************
    
    $(".child").parents(".great-great-parent").css({
        "color": "red",
        "border": "2px solid red"
    });



});