// Display current date and time on the jumbotron
let timeEl = $('#currentDay');
let currentDate = moment().format('MMMM DD, YYYY');
function time() {
    timeEl.text(currentDate);
}

setInterval(time, 1000);

// Current hour variable
let currentHour = moment().format('H');


let rows = $('.row');

// Creating an array of rows and adding a color function
Array.from(rows).forEach( function(row) {
    let rowIdString = parseInt(row.id);
    
    if (currentHour > rowIdString) {
        $(row).addClass('past');
    } else if (currentHour === rowIdString) {
        $(row).addClass('present');
    } else if (currentHour < rowIdString) {
        $(row).addClass('future')
    }
});

// Save button and adding tasks
let eventDiv = $('#event');
let saveBtn = $(".saveBtn");

// let eventHour = rows.getAttribute('id');

saveBtn.click(function(event) {
    console.log('clicked');
    let eventText = $(this).siblings('input').val();
    let eventHour = $(this).parent().attr('id');
    let eventList = [];
    let eventObject = new Object();

    eventObject.event = eventText;
    eventObject.time = eventHour;
    eventList.push(eventObject);
    localStorage.setItem('userEvents', JSON.stringify(eventList));

    console.log(eventList);
});






