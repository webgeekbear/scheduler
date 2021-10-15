// Saved schedule items
var schedule = [];

// Display the current date in the appropriate spot
$("#currentDay").text(moment().format("dddd, MMMM D"));

var currMoment = moment();

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
        const event = schedule[i];
        $("#text-" + i).val(event.trim());
    }
}

// Save the schedule
function saveSchedule() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

// Set the current moment.  
// Pass in a value from 1 to 23 to allow for testing of the past, present, and 
// future display in the schedule. 
// Pass in zero to set the moment to the current time.
function setMoment(time) {
    if (!time) {
        currMoment = moment();
    } else {
        currMoment = moment().hour(time);
    }
}

// Update the schedule display as needed
function updateSchedule() {
    // All we care about is the hour
    let currMomentInt = currMoment.hour();

    // These indexes are stored as id attributes in HTML.
    for (let i = 0; i < 9; i++) {
        // Get the text element for the event time
        let textEl = $("#text-" + i);

        // Remove any time classes from the text element
        textEl.removeClass("past present future");

        // Get the hour of the event time
        let eventHour = parseInt(textEl.attr("info-hour"));

        let timeDiff = eventHour - currMomentInt;

        if (timeDiff < 0) {
            textEl.addClass("past");
        } else if (timeDiff > 0) {
            textEl.addClass("future");
        } else {
            textEl.addClass("present");
        }
    }
}