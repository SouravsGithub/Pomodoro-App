// reference to the elements
const minHolder = document.querySelector(".minutes");
const secHolder = document.querySelector(".seconds");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const input = document.querySelector(".min-box");
// initial display
let minutes = 25;
let seconds = "00";

if (minutes >= 0 && minutes < 10) {
    minHolder.innerHTML = "0" + minutes;
} else {
    minHolder.innerHTML = minutes;
}
secHolder.innerHTML = seconds;

let myIntervalID;
startBtn.addEventListener("click", () => {
    // start timer
    if (input.value !== 0) {
        minutes = input.value;
    } else {
        minutes = 25;
    }
    seconds = 0;
    myIntervalID = setInterval(countdown, 1000);
});
resetBtn.addEventListener("click", () => {
    // reset timer
    clearInterval(myIntervalID);
    minutes = 25;
    seconds = "00";
    if (minutes >= 0 && minutes < 10) {
        minHolder.innerHTML = "0" + minutes;
    } else {
        minHolder.innerHTML = minutes;
    }
    secHolder.innerHTML = seconds;
})
function countdown() {
    // if the timer is on 00:00 then stop
    if (minutes === 0 && seconds === 0) {
        clearInterval(myIntervalID);
    } else {
        // otherwise run the timer
        if (seconds !== 0) {
            seconds--;
        } else {
            minutes = minutes - 1;
            seconds = 59;
        }
        if (minutes >= 0 && minutes < 10) {
            minHolder.innerHTML = "0" + minutes;
        } else {
            minHolder.innerHTML = minutes;
        }
        if (seconds >= 00 && seconds < 10) {
            secHolder.innerHTML = "0" + seconds;
        } else {
            secHolder.innerHTML = seconds;
        }
    }

}
