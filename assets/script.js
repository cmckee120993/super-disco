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

    setInterval(this, 1000*60*60 );
});

// Save button and adding tasks
let eventDiv = $('#event');
let saveBtn = $(".saveBtn");

// let eventHour = rows.getAttribute('id');

saveBtn.click(function(event) {
    console.log('clicked');
    let eventText = $(this).siblings('input').val();
    let eventHour = $(this).parent().attr('id');
    
    localStorage.setItem(eventHour, eventText);

    $('#9 .message').text(localStorage.getItem('9'));
    $('#10 .message').text(localStorage.getItem('10'));
    $('#11 .message').text(localStorage.getItem('11'));
    $('#12 .message').text(localStorage.getItem('12'));
    $('#13 .message').text(localStorage.getItem('13'));
    $('#14 .message').text(localStorage.getItem('14'));
    $('#15 .message').text(localStorage.getItem('15'));
    $('#16 .message').text(localStorage.getItem('16'));
    $('#17 .message').text(localStorage.getItem('17'));
});






