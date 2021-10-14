// Saved schedule items
var schedule = [];

// Display the current date in the appropriate spot
$("#currentDay").text(moment().format("dddd, MMMM D"));
loadSchedule();

// Save button was clicked
$(".row").on("click", "button", function () {
    // get index of button
    let index = $(this)
        .attr("id")
        .replace("save-", "");

    let text = $("#text-" + index)
        .val()
        .trim();

    schedule[index] = text;

    saveSchedule();
});

// Load the schedule
function loadSchedule() {
    schedule = JSON.parse(localStorage.getItem("schedule"));

    // If nothing in localStorage, create a new array of empty strings
    if (!schedule) {
        schedule = ["", "", "", "", "", "", "", "", ""];
    }

    for (let i = 0; i < schedule.length; i++) {
        const item = schedule[i];
        $("#text-" + i).val(item.trim());
    }
}

// Save the schedule
function saveSchedule() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
}