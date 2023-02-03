// reference to the elements
const minHolder = document.querySelector(".minutes");
const secHolder = document.querySelector(".seconds");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const input = document.querySelector(".min-box");
// initial display
let minutes;
let seconds;
let myIntervalID;
function initialState() {
    minutes = 25;
    seconds = 0;
    placeHolderTime();
}
function placeHolderTime() {
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

initialState();

startBtn.addEventListener("click", () => {
    // start timer
    let numInput = Number(input.value);
    if (isNaN(numInput)) {
        minutes = 25;
    } else if (input.value !== "" && numInput > 0 && numInput <= 180) {
        minutes = numInput;
    } else {
        minutes = 25;
    }
    seconds = 0;
    myIntervalID = setInterval(countdown, 1000);
});
resetBtn.addEventListener("click", () => {
    // reset timer
    clearInterval(myIntervalID);
    initialState();
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
        placeHolderTime();
    }

}
