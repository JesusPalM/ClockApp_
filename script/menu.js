const localHour = () => {
    const date = moment().format('h:mm:ss');
    const hourRefresh = document.querySelector("[data-local-hour]")
    hourRefresh.innerHTML = date;
}

setInterval(localHour,1000)