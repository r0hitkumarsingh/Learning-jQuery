// script.js
$(document).ready(function() {
    $("#registrationForm").submit(function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Clear previous error messages
        $(".error").text("");

        // Get form values
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();

        // Flag to track if the form is valid
        let isValid = true;

        // Validate name
        if (name === "") {
            $("#nameError").text("Name is required");
            isValid = false;
        }

        // Validate email
        if (email === "") {
            $("#emailError").text("Email is required");
            isValid = false;
        } else if (!validateEmail(email)) {
            $("#emailError").text("Enter a valid email");
            isValid = false;
        }

        // Validate password
        if (password === "") {
            $("#passwordError").text("Password is required");
            isValid = false;
        } else if (password.length < 6) {
            $("#passwordError").text("Password must be at least 6 characters");
            isValid = false;
        }

        // If form is valid, submit it
        if (isValid) {
            alert("Form submitted successfully!");
            // You can proceed with form submission here (e.g., using AJAX)
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
