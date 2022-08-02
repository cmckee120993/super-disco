// Display current date and time on the jumbotron
let timeEl = $('#currentDay');

function time() {
    let currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeEl.text(currentTime);
}

setInterval(time, 1000);