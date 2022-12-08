const body = document.body;
const html = document.querySelector("html");

const defaultMode= document.querySelector("[data-theme-default]");
const darkMode = document.querySelector("[data-theme-dark]");
const lightMode = document.querySelector("[data-theme-light]");
const earthMode = document.querySelector("[data-theme-earth]");

const checkboxToggle = (checkbox) =>{
    const checkboxes = document.getElementsByClassName("navigation_checkbox");
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
    checkbox.checked = true;
};

const themeToggle = () =>{
    body.style.animation = "displayBackground 120s linear infinite alternate";
    if(darkMode.checked){
        body.style.backgroundImage = "url(../../assets/img/img/dark_bg.jpg)";
    }else if(lightMode.checked){
        body.style.backgroundImage = "url(../../assets/img/img/light_bg.jpg)";
    }else if(earthMode.checked){
        body.style.backgroundImage = "url(../../assets/img/img/earth_bg.jpg)";
    }else{
        body.style.backgroundImage = "none";
        body.style.animation = "none";
    }
};

setInterval(themeToggle,10);