$(document).ready(function() {
   
   $(".key").click(function () {
    
    let currDisplay = $(".display").val();
    // console.log("Current Display : ", currDisplay);

    let btnValue = $(this).text();
    // console.log("Btn Value: ", btnValue);

    let newDisplayValue = currDisplay + btnValue;
    // console.log("New Display Value: ", newDisplayValue);

    $(".display").val(newDisplayValue)
   });



   $(".operator-btn").click(function () {
    console.log("Operator btn is clicked");

    let currDisplay = $(".display").val();
    let operator = $(this).text();

    console.log("First Value: ", currDisplay);
    console.log("Operator: ", operator);

    $(".display").val("");
   });

   $(".calculate").click(function() {
    console.log("Equals button clicked!");
    
    // Retrieve stored values and operator
    let firstValue = $(".display").data("firstValue");
    let operator = $(".display").data("operator");
    let secondValue = $(".display").val();
    
    console.log("First Value: ", firstValue);
    console.log("Operator: ", operator);
    console.log("Second Value: ", secondValue);
    
    let result;

    // Perform the calculation
    switch(operator) {
        case '+':
            result = parseFloat(firstValue) + parseFloat(secondValue);
            break;
        case '-':
            result = parseFloat(firstValue) - parseFloat(secondValue);
            break;
        case '*':
            result = parseFloat(firstValue) * parseFloat(secondValue);
            break;
        case '/':
            result = parseFloat(firstValue) / parseFloat(secondValue);
            break;
    }

    console.log("Result: ", result);
    
    // Update the display with the result
    $(".display").val(result);
});

// Event listener for the clear button
$(".clear").click(function() {
    console.log("Clear button clicked!");
    
    // Clear the display and reset stored values
    $(".display").val("");
    $(".display").data("firstValue", "");
    $(".display").data("operator", "");
});
});
