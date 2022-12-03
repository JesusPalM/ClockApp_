//Slide animation display

function slideInDisplay(element) {
    element.style.animation = "slideInDisplay 1s";
    element.style.display = "flex";
}

const slideOutDisplay = (element) =>{
    element.style.animation = "slideOutDisplay 1s";
    setTimeout(()=>{element.style.display = "none"},900);
}

//Main menu display

const mainMenuButton = document.querySelector("[data-main-menu-btn]");
const mainMenu = document.querySelector("[data-main-menu]");

mainMenuButton.addEventListener("click",()=>{
    let displayStatus = mainMenu.getAttribute("data-visible");
    if(displayStatus === "false"){
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

function displayOK (object){
    let displayStatus = object.getAttribute("data-visible");
    if(displayStatus === "false"){
        object.setAttribute("data-visible", true);
        slideInDisplay(object);
    }
    else{
        object.setAttribute("data-visible", false);
        slideOutDisplay(object);   
    }
};

settingsButton.addEventListener("click",()=>{displayOK(setingsMenu)});
themeButton.addEventListener("click",()=>{displayOK(themeMenu)});

//Theme display