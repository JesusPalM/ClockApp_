let [hours, minutes, seconds, milliseconds] = [0,0,0,0];
let interval;

const startButton = document.querySelector("[data-start-button]");
const stopButton = document.querySelector("[data-stop-button]");
const resetButton = document.querySelector("[data-reset-button]");

const startButtonText = document.querySelector("[data-start-text]");
const elaspedTime = document.querySelector("[data-elapsed-time]");
const elapsedMilliseconds = document.querySelector("[data-elapsed-ms]");

const startStopwatch = () => {
    milliseconds +=10;
    if(milliseconds >= 1000){
        milliseconds = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
            if(minutes === 60){
                minutes = 0;
                hours++;
            }
        }
    }

    const hoursString = String(hours).padStart(2, "0");
    const minutesString = String(minutes).padStart(2, "0");
    const secondsString = String(seconds).padStart(2, "0");
    const millisecondsString = String(milliseconds).padStart(3, "0");
    
    startButton.style.display = "none";
    stopButton.style.display = "inline-block";
    resetButton.style.display = "inline-block";
    startButtonText.innerHTML = "Resume";
    elaspedTime.innerHTML = `${hoursString}:${minutesString}:${secondsString}`;
    elapsedMilliseconds.innerHTML = `.${millisecondsString}`;
};

const stopStopwatch = () => {
    clearInterval(interval);
    startButton.style.display = "inline-block";
};

const resetStopwatch = () => {
    clearInterval(interval);
    [hours, minutes, seconds, milliseconds] = [0,0,0,0];
    startButton.style.display = "inline-block";
    stopButton.style.display = "none";
    resetButton.style.display = "none"; 
    startButtonText.innerHTML = "Start";
    elaspedTime.innerHTML = "00:00:00";
    elapsedMilliseconds.innerHTML = ".000";
};

startButton.addEventListener("click", () => {interval = setInterval(startStopwatch, 10)});
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);