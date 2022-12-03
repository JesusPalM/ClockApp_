const hour = document.querySelector("[data-local-hour]");
const amPm = document.querySelector("[data-local-amPm]");
const date = document.querySelector("[data-local-date]");
const toggle24hours = document.querySelector("[data-settings-hours24]");
const toggleSeconds = document.querySelector("[data-settings-seconds]")

//Currently under development : Looking for the best solution

let hours = "hh";
let seconds = "";

toggle24hours.addEventListener ("click",() =>{
    if(toggle24hours.checked == true){
        hours = "HH"; 
    }
    else{
        hours = "hh";
    }
});

toggleSeconds.addEventListener ("click",() =>{
    if(toggleSeconds.checked == true){
        seconds = ":ss";
    }
    else{
        seconds = "";
    }
});

const localTime = () => {
    const currentHour = moment().format(hours + ":mm" + seconds);
    const currentAMPM = moment().format('A');
    const currentDate = moment().format('MMM Do, YYYY');
    hour.innerHTML = currentHour;
    amPm.innerHTML = currentAMPM;
    date.innerHTML = currentDate;
}

setInterval(localTime,1000);

/*
function checkedToggle (toggle, _time, desiredState){
    if(toggle.checked == true){
        _time = desiredState; 
        console.log(_time);
    }
    else{
        _time = _time;
        console.log(_time);
    } 
}

toggle24hours.addEventListener("click", function(){checkedToggle(toggle24hours, hours, "HH")});
toggleSeconds.addEventListener("click", function(){checkedToggle(toggleSeconds,seconds,":ss")});

let hours = "hh";
let seconds = "";
*/