const toggleDarkMode = document.querySelector("[data-theme-dark]");
const toggleLightMode = document.querySelector("[data-theme-light]");
const toggleEarthMode = document.querySelector("[data-theme-earth]");

const body = document.body;

toggleDarkMode.addEventListener("click",()=>{
    body.style.backgroundImage = "none";
});

toggleLightMode.addEventListener("click",()=>{
    body.style.backgroundImage = "none";
});

toggleEarthMode.addEventListener("click",()=>{
    setTimeout(()=>{body.style.backgroundImage = "url(../../assets/img/img/earth_bg.jpg)"},1000);
    body.style.animation = "displayBackground 120s linear infinite alternate";
});
