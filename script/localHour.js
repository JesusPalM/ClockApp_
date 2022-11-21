const refreshHour = () => {
    const hour = document.querySelector("[data-local-hour]")
    const currentHour = moment().format('h:mm');
    const amPm = document.querySelector("[data-local-amPm]")
    const currentAMPM = moment().format('A');

    amPm.innerHTML = currentAMPM;
    hour.innerHTML = currentHour;
}

setInterval(refreshHour,1000);