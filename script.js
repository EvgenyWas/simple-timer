// DOM elements
const count = document.getElementById('count');
const btnStop = document.getElementById('stop');
const btnStart = document.getElementById('start');

// Functions
const disableBtn = btn => btn.setAttribute('disabled', 'disabled');
const enableBtn = btn => btn.removeAttribute('disabled', 'disabled');

// Variables
let secondsCounter = 0;
let clickStopCounter = 0;

// Events
btnStart.addEventListener('click', () => {
    timerId = setInterval(() => {
        secondsCounter++;
        count.textContent = secondsCounter;
    }, 1000);
    
    disableBtn(btnStart);
    enableBtn(btnStop);
    clickStopCounter = 0;
});

btnStop.addEventListener('click', () => {
    clearInterval(timerId);
    enableBtn(btnStart);
    if (clickStopCounter) {
        secondsCounter = 0;
        count.textContent = secondsCounter;
        clickStopCounter = 0;
        disableBtn(btnStop);
        return;
    };

    clickStopCounter++;
});