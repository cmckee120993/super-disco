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
let userEvent = $('input').val;
let eventDiv = $('#event');
let saveBtn = $(".saveBtn");
// let eventHour = rows.getAttribute('id');


saveBtn.click(function(event) {
    console.log('clicked');
    

})


// saveBtn.forEach(function(button){
//     saveBtn.click(function(event) {
//         console.log(clicked);
//     })
// })

// $("button").click(function(event) {
//     console.log('clicked');
//     let eventList = JSON.parse(localStorage.getItem('userEvents'));
//     if (eventList === null) {
//         let eventList = [];
//     let newEvent = new Object();

//     newEvent.event = $('input').val();
//     newEvent.hour = eventHour;

//     eventList.push(newEvent);
//     localStorage.setItem('userEvents', JSON.stringify(eventList));
//     console.log(eventList);
//     } else {
//         var otherEvent = new Object();
//         otherEvent.event = $('input').val();
//         otherEvent.hour = eventHour;
//         console.log(otherEvent);
//         eventList.push(otherEvent);
//         localStorage.setItem('userEvent', JSON.stringify(otherEvent));
//         console.log(eventList);
//     }

    // let eventInput = $(this).siblings(userEvent).text();
    // let rowsInput = $(this).closest('.row');
    

// localStorage.setItem('row', eventHour);
// localStorage.setItem('event', JSON.stringify(eventInput));

//    if(userEvent === "") {
//     console.log('empty');
// //     let popUpMessage = document.createElement('p');
// //     popUpMessage.textContent = 'Please type an event before hitting save.';
// //     eventDiv.append(popUpMessage);

//    }
// );



