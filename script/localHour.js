const hour = document.querySelector("[data-local-hour]")
const currentHour = moment().format('h:mm:ss');
const AMPM = document.querySelector("[data-local-AMPM]")
const currentAMPM = moment().format('A');

const timeRefresher = (timeDisplayed, timeVariable) => {
    timeDisplayed.innerHTML = timeVariable;
    return timeDisplayed;
};

setInterval(() => { 
    timeRefresher(hour, currentHour);
   }, 1000);

/*
const localHour = () => {
    const hour= document.querySelector("[data-local-hour]")
    const currentHour = moment().format('h:mm:ss');
    hour.innerHTML = currentHour;
}

const localAMPM = () =>{
    const AMPM= document.querySelector("[data-local-AMPM]")
    const currentAMPM = moment().format('A');
    AMPM.innerHTML = currentAMPM;
}

setInterval(localHour,1000);
setInterval(localAMPM,1000);
*/