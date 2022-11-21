const refreshHour = () => {
    const hour = document.querySelector("[data-local-hour]");
    const currentHour = moment().format('h:mm');
    const amPm = document.querySelector("[data-local-amPm]");
    const currentAMPM = moment().format('A');
    const date = document.querySelector("[data-local-date]");
    const currentDate = moment().format('MMM Do, YYYY');
   
    amPm.innerHTML = currentAMPM;
    hour.innerHTML = currentHour;
    date.innerHTML = currentDate;
}

setInterval(refreshHour,1000);