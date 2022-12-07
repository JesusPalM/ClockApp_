const toggleDefaultMode = document.querySelector("[data-theme-default]");
const toggleDarkMode = document.querySelector("[data-theme-dark]");
const toggleLightMode = document.querySelector("[data-theme-light]");
const toggleEarthMode = document.querySelector("[data-theme-earth]");

const body = document.body;

const themeToggle = () =>{
    body.style.animation = "displayBackground 120s linear infinite alternate";
    if(toggleDarkMode.checked){
        toggleLightMode.checked = false;
        toggleEarthMode.checked = false;
        body.style.backgroundImage = "url(../../assets/img/img/dark_bg.jpg)";
        toggleDefaultMode.style.backgroundImage = "none"; 
        toggleDefaultMode.style.backgroundColor = "var( --black-5)"; 
    }else if(toggleLightMode.checked){
        toggleDarkMode.checked = false;
        toggleEarthMode.checked = false;
        body.style.backgroundImage = "url(../../assets/img/img/light_bg.jpg)";
        toggleDefaultMode.style.backgroundImage = "none"; 
        toggleDefaultMode.style.backgroundColor = "var( --black-5)"; 
    }else if(toggleEarthMode.checked){
        toggleDarkMode.checked = false;
        toggleLightMode.checked = false;
        body.style.backgroundImage = "url(../../assets/img/img/earth_bg.jpg)";
        toggleDefaultMode.style.backgroundImage = "none"; 
        toggleDefaultMode.style.backgroundColor = "var( --black-5)"; 
    }
    else{
        toggleDefaultMode.style.backgroundImage = "url(../../assets/img/icons/menu/check-lg.svg)";
        toggleDefaultMode.style.backgroundColor = "var( --black-3)"; 
        body.style.backgroundImage = "none";
        body.style.animation = "none";
    }
};

setInterval(themeToggle,10);