//Luxon date and time declaration

const DateTime = luxon.DateTime;
const currentDate = DateTime.now().setLocale('en');

//Local date and time value

const localTime = document.querySelector("[data-local-time]");
const localAmPm = document.querySelector("[data-local-meridiem]");
const localDate = document.querySelector("[data-local-date]");
const localTimeZone = document.querySelector("[data-local-timeZone]");

let hoursFormat = "hh:mm";

const localDateTime = () => {
    const currentDate = DateTime.now().setLocale('en');
    const currentLocalTime = currentDate.toFormat(hoursFormat);
    const currentLocalMeridiem = currentDate.toFormat('a');
    const currentLocalDate = currentDate.toFormat('DD');
    const currentLocalUTC= currentDate.toFormat("Z");
    const currentLocalIANAZone = currentDate.toFormat("z");

    localTime.innerHTML = currentLocalTime;
    localAmPm.innerHTML = currentLocalMeridiem;
    localDate.innerHTML = currentLocalDate;
    localTimeZone.innerHTML = `UTC ${currentLocalUTC} | ${currentLocalIANAZone}`;
};

setInterval(localDateTime,1000);

//Hour formatting

const toggle24hours = document.querySelector("[data-settings-hours24]");
const toggleSeconds = document.querySelector("[data-settings-seconds]");

toggle24hours.addEventListener("click", () => {
    hoursFormat = toggle24hours.checked ? "HH:mm" : "hh:mm";
    localTime.innerHTML = currentDate.toFormat(hoursFormat);
});

toggleSeconds.addEventListener("click", () => {
    hoursFormat = toggleSeconds.checked ? `${hoursFormat}:ss` : hoursFormat.replace(":ss", "");
    localTime.innerHTML = currentDate.toFormat(hoursFormat);
});