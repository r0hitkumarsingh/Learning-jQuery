$(document).ready(function () {

    $('p:first').click(function () {
        $(this).hide();
    })


    $("btn-one").click(function(){
        $("#two").hide();
    })

    // $("#three").mouseleave(function(){
    //     alert("bye!!!")
    // })

    // $("three").mouseleave(function () {
    //     alert("Bye !!!")
    // })

    $(".box").on({
        mouseenter: function(){
            $(this).css("background-color", "#676EF1")
        },

        mouseleave: function () {
            $(this).css("background-color", "#fff")
        },

        click: function(){
            $(this).css("background-color", "#94535E")
        }
    });
 
    $("#btn-two").on({
        click: function(){
            $("#div-four").show(2000);
        }
    })

    $("#btn-three").on({
        click: function(){
            $("#div-four").hide(1000);
        }
    })


    $(".btn-toggle").click(function(){
        $("#div-four").toggle(1000);
    });




    $(".slide-1").click(function () {
        $(".slide-2").slideToggle("slow");
    })




});