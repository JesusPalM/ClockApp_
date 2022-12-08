//Luxon date and time declaration

export const DateTime = luxon.DateTime;
export const currentDate = DateTime.now().setLocale('en');

//Local date and time value

const localTime = document.querySelector("[data-local-time]");
const localAmPm = document.querySelector("[data-local-meridiem]");
const localDate = document.querySelector("[data-local-date]");
const localTimeZone = document.querySelector("[data-local-timeZone]");

const localDateTime = () => {
    const currentDate = DateTime.now().setLocale('en');
    const currentLocalTime = currentDate.toFormat(hours + ":mm" + seconds);
    const currentLocalMeridiem = currentDate.toFormat('a');
    const currentLocalDate = currentDate.toFormat('DD');
    const currentLocalUTC= currentDate.toFormat("Z");
    const currentLocalIANAZone = currentDate.toFormat("z");

    localTime.innerHTML = currentLocalTime;
    localAmPm.innerHTML = currentLocalMeridiem;
    localDate.innerHTML = currentLocalDate;
    localTimeZone.innerHTML = "UTC " + currentLocalUTC  + " | " + currentLocalIANAZone;
}

setInterval(localDateTime,1000);

//Hour formatting

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


/*Abstract function to switch hour format

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