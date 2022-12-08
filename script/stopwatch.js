let [hours, minutes, seconds, milliseconds] = [0,0,0,0];
let interval;

const startButton = document.querySelector("[data-start-button]");
const stopButton = document.querySelector("[data-stop-button]");
const resetButton = document.querySelector("[data-reset-button]");

const startButtonText = document.querySelector("[data-start-text]");
const elaspedTime = document.querySelector("[data-elapsed-time]");
const elapsedMilliseconds = document.querySelector("[data-elapsed-ms]");

startButton.addEventListener("click", () => {interval = setInterval(startStopwatch, 10)});

const startStopwatch = () => {
    milliseconds +=10;
    if(milliseconds >= 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds ;
    
    startButton.style.display = "none";
    stopButton.style.display = "inline-block";
    resetButton.style.display = "inline-block";
    startButtonText.innerHTML = "Resume";
    elaspedTime.innerHTML = `${h}:${m}:${s}`;
    elapsedMilliseconds.innerHTML = `.${ms}`
};

const stopStopwatch = () => {
    clearInterval(interval);
    startButton.style.display = "inline-block";
    stopButton.style.cursor = "not-allowed";
};

const resetStopwatch = () => {
    clearInterval(interval);
    [hours, minutes, seconds, milliseconds] = [0,0,0,0];
    startButton.style.display = "inline-block";
    stopButton.style.display = "none";
    resetButton.style.display = "none"; 
    startButtonText.innerHTML = "Start";
    elaspedTime.innerHTML = "00:00:00"
    elapsedMilliseconds.innerHTML = ".000";
};

stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);