// Display the current date in the appropriate spot
$("#currentDay").text(moment().format("dddd, MMMM D"));

// Text paragraph was clicked
$(".row").on("click", "p", function () {
    // Get current text
    let curText = $(this)
        .text()
        .trim();
    
    // Create new textarea
    let textarea = $("<textarea>")
        .val(curText);
    
    $(this).replaceWith(textarea);

    textarea.trigger("focus");
});

// Save button was clicked
$(".row").on("click", "button", function () {
    
})