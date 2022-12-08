import { slideInDisplay, slideOutDisplay} from "./animations.js";
import { toggleElement } from "./toggleDisplay.js";

//Main menu display

const mainMenuButton = document.querySelector("[data-main-menu-btn]");
const mainMenu = document.querySelector("[data-main-menu]");

const handleWindowResize  = () => {
    if(window.innerWidth > 540){
        mainMenu.setAttribute("data-visible", true);
        mainMenu.style.animation = "none";
        mainMenu.style.display = "flex";
    }else{
        mainMenu.setAttribute("data-visible", false);
        mainMenu.style.display = "none";
        mainMenuButton.style.backgroundImage="url(../../assets/img/icons/menu/list.svg)"
    }    
};

window.addEventListener("resize", handleWindowResize);

mainMenuButton.addEventListener("click",()=>{
    if(mainMenu.getAttribute("data-visible") === "false"){
        mainMenu.setAttribute("data-visible",true);
        slideInDisplay(mainMenu);
        mainMenuButton.style.backgroundImage="url(../../assets/img/icons/menu/x.svg)"
    }
    else{
        mainMenu.setAttribute("data-visible",false);
        slideOutDisplay(mainMenu);
        mainMenuButton.style.backgroundImage="url(../../assets/img/icons/menu/list.svg)"
    }
});

//Settings display

const settingsButton = document.querySelector("[data-settings-btn]");
const setingsMenu = document.querySelector("[data-settings]");
const themeButton = document.querySelector("[data-theme-btn]");
const themeMenu = document.querySelector("[data-theme]");

settingsButton.addEventListener("click",()=>{toggleElement(setingsMenu);});
themeButton.addEventListener("click",()=>{toggleElement(themeMenu);});