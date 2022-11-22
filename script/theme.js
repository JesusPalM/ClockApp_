const toggleDarkMode = document.querySelector("[data-theme-dark]");
const toggleLightMode = document.querySelector("[data-theme-light]");
const toggleEarthMode = document.querySelector("[data-theme-earth]");


toggleDarkMode.addEventListener("click",()=>{
    webBody.style.backgroundImage = "none";
});

toggleLightMode.addEventListener("click",()=>{
    webBody.style.backgroundImage = "none";
});

toggleEarthMode.addEventListener("click",()=>{
    setTimeout(()=>{webBody.style.backgroundImage = "url(../../assets/img/img/earth_bg.jpg)"},1000);
    webBody.style.animation = "displayBackground 120s linear infinite alternate";
});
