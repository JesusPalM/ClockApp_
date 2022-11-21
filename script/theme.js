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
    body.style.backgroundImage = "url(../../assets/img/img/earth_bg.jpg)";
    body.style.transition = "background-image 2s";
});
