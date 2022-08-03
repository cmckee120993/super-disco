// Display current date and time on the jumbotron
let timeEl = $('#currentDay');
let currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
function time() {
    timeEl.text(currentTime);
}

setInterval(time, 1000);

// Coloring the schedule as past, present, or future
// Variables for the content from the rows
// let nine = $("#time-9").textContent;
// let ten = $("#time-10").textContent;
// let eleven = $("#time-11").textContent;
// let twelve = $("#time-12").textContent;
// let one = $("#time-1").textContent;
// let two = $("#time-2").textContent;
// let three = $("#time-3").textContent;
// let four = $("#time-4").textContent;
// let five = $("#time-5").textContent;

// Current hour variable
let currentHour = moment().format('h a');
console.log(currentHour)

let rows = $('.row');

Array.from(rows).forEach( row => {
    let rowIdString = row.id;
    
    if (currentHour > rowIdString) {
        row.classList.add('past');
    } else if (currentHour === rowIdString) {
        row.classList.add('present');
    } else if (currentHour < rowIdString) {
        row.classList.add('future')
    }
})
// Creating an array of the rows
// let timeArray = [nine, ten, eleven, twelve, one, two, three, four, five];

// function timeByColor() {
//     for (let i =0; i<timeArray.length; i++) {
//         if (timeArray[i] < currentHour) {
//         element.classList.add("past")
//         } else if (timeArray[i] = currentHour) {
//             element.classList.add("present")
//             } 
//     }
// };
