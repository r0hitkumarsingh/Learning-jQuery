$(document).ready(function () {
   $("#registrationForm").submit(function (event) {
    event.preventDefault();

   $(".error").text("");

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let password = $("#password").val().trim();
    

    let isValid = true;

    if (name === "") {
        $("#nameError").text("Name is required!");
        isValid = false;
    }

    if (email === "") {
        $("#emailError").text("Email is required!")
        isValid = false;
    }else if(!validateEmail(email)){
        $("#emailError").text("Enter a valid email.");
        isValid = false;
    }

    if (password === "") {
        $("#passwordError").text("Password is required!")
        isValid = false;
    }else if(password.length < 6){
        $("#passwordError").text("Password must be at least 6 characters");
        isValid = false;
    }

    if (isValid) {
        $("#successModal").css("display", "flex");
        $("#registrationForm")[0].reset();
    }

    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    $(".close-button").click(function () {
        $("#successModal").css("display", "none");
    });

    $(window).click(function(event) {
        if ($(event.target).is("#successModal")) {
            $("#successModal").css("display", "none");
        }
    });

   }) ;


});