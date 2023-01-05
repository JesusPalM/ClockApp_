let interval;

const startButton = document.querySelector("[data-start-button]");
const stopButton = document.querySelector("[data-stop-button]");
const resetButton = document.querySelector("[data-reset-button]");

const startButtonText = document.querySelector("[data-start-text]");

const timerValue = document.querySelector("[data-timer-value]");
const timerHours = document.querySelector("[data-timer-hours]");
const timerMinutes = document.querySelector("[data-timer-minutes]");
const timerSeconds = document.querySelector("[data-timer-seconds]");

const inputElement = document.querySelector("#input_element");
let inputValue = inputElement.value;

inputElement.addEventListener("input", () => {
    inputValue = inputElement.value;
});

timerValue.style.display = "none";

let hours = 0;//Here it has to be a not zero value or ask for user input
let minutes = 1;//Here it has to be a not zero value or ask for user input
let seconds = 10;//Here it has to be a not zero value or ask for user input

const startTimer = () => {
    seconds -= 1;
    if (seconds == 0){
        seconds = 59;
        minutes -= 1;
        if(minutes == 0){
            minutes = 59;
            hours -= 1;
        }
    };

    const hoursString = String(hours).padStart(2, "0");
    const minutesString = String(minutes).padStart(2, "0");
    const secondsString = String(seconds).padStart(2, "0");
  
    timerHours.innerHTML = `${hoursString}`;
    timerMinutes.innerHTML = `${minutesString}`;
    timerSeconds.innerHTML = `${secondsString}`;

    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(interval);
      hours = 0;//Here it has to be a not zero value or ask for user input
      minutes = 0;//Here it has to be a not zero value or ask for user input
      seconds = 0;//Here it has to be a not zero value or ask for user input
    }

    timerValue.style.display = "inline-block";
    inputElement.style.display = "none";
    startButton.style.display = "none";
    stopButton.style.display = "inline-block";
    resetButton.style.display = "inline-block";
    startButtonText.innerHTML = "Resume";
};

const stopTimer = () => {
    clearInterval(interval);
    startButton.style.display = "inline-block";
};

const resetTimer = () => {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    timerValue.style.display = "none";
    inputElement.style.display = "inline-block";
    startButton.style.display = "inline-block";
    stopButton.style.display = "none";
    resetButton.style.display = "none"; 
    startButtonText.innerHTML = "Start";
    timerHours.innerHTML = "00";
    timerMinutes.innerHTML = "00";
    timerSeconds.innerHTML = "00";
};

  
startButton.addEventListener("click", () => {interval = setInterval(startTimer, 1000);});
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);