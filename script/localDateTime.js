const toggle24hours = document.querySelector("[data-settings-hours24]");
const toggleSeconds = document.querySelector("[data-settings-seconds]")

let hours = "hh";
let seconds = "";

toggle24hours.addEventListener("click",() =>{
    if(toggle24hours.checked){
        hours = "HH";
    }
    else{
        hours = "hh";
    }
});

toggleSeconds.addEventListener("click",() =>{
    if(toggleSeconds.checked){
        seconds = ":ss";
    }
    else{
        seconds = "";
    }
});

const localTime = document.querySelector("[data-local-time]");
const localAmPm = document.querySelector("[data-local-AmPm]");
const localDate = document.querySelector("[data-local-date]");

const localDateTime = () => {
    const currentLocalTime = moment().format(hours + ":mm" + seconds);
    const currentLocalAmPm = moment().format('A');
    const currentLocalDate = moment().format('MMM Do, YYYY');
    localTime.innerHTML = currentLocalTime;
    localAmPm.innerHTML = currentLocalAmPm;
    localDate.innerHTML = currentLocalDate;
}

setInterval(localDateTime,1000);

/*
const switchState = (toggle, _time, initialState, desiredState) =>{
    if(toggle.checked){
        _time = desiredState;
        console.log(_time);
    }else{
        _time = initialState;
        console.log(_time);
    }; 
};

toggleSeconds.addEventListener ("click", ()=>{switchState(toggleSeconds, seconds, secondsF[1], secondsF[0]);});
toggle24hours.addEventListener ("click", ()=>{switchState(toggle24hours, hours, hoursF[1], hoursF[0]);});
*/