const testArray = [
    "hh:mm",
    "hh:mm:ss"
]

let hourFormat = "hh:mm";

function toggleDisplay(element) {
    element.addEventListener("click",()=>{
        const displayStatus = element.getAttribute("data-visible");
        if(displayStatus == "false"){
            element.setAttribute("data-visible",true);//Already hide to visible
            hourFormat = testArray[0];
        }
        else if(displayStatus == "true"){
            element.setAttribute("data-visible",false);//Already visible to hide
            hourFormat = testArray[1]; 
        }
    });
};

const hour = document.querySelector("[data-local-hour]");
const amPm = document.querySelector("[data-local-amPm]");
const date = document.querySelector("[data-local-date]");
const secondsDisplay = document.querySelector("[data-toggle-seconds]");

const localTime = () => {
    const currentHour = moment().format(hourFormat);
    const currentAMPM = moment().format('A');
    const currentDate = moment().format('MMM Do, YYYY');
    hour.innerHTML = currentHour;
    amPm.innerHTML = currentAMPM;
    date.innerHTML = currentDate;
}

toggleDisplay(secondsDisplay);
setInterval(localTime,1000);