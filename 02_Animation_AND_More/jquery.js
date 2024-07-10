$(document).ready(function () {
    
    $("#btn-1").click(function () {
        
        // $("#frist-div").animate({
        //     // left: '250px',
        //     // // opacity: '0.5',
        //     // height: '+=150px',
        //     // width: '+=150px',
    
    
        var div = $("#frist-div");

        // div.animate({height: '300px', opacity: '0.4'}, "slow");
        // div.animate({width: '300px', opacity: '0.8'}, "slow");
        // div.animate({height: '100px', opacity: '0.4'}, "slow");
        // div.animate({width: '100px', opacity: '0.8'}, "slow");

        div.animate({left: '100px'}, "slow")
        div.animate({fontSize: '3em'}, "slow")



    });



    // Chaining


    $(".btn-2").click(function () {
        $(".p-frist")
        .hide("slow")
        .show("slow")
        
        .fadeOut(1000)
        .fadeIn(1000)
        .css("color", "red")
    });




    // *****************  DOM Manipulation  ****************************

    
});