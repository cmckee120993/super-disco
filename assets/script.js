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
$("button").on('click', function() {
    console.log('hello');
})



