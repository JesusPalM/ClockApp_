//Display function and animation

const displaySettings = (object)=>{
    let displayStatus = object.getAttribute("data-visible");
    if(displayStatus === "false"){
        object.setAttribute("data-visible",true);
        object.style.display = "flex";
    }
    else{
        object.setAttribute("data-visible",false);
        object.style.display = "none"; 
    }
};

const slideInDisplay = (element)=>{
    element.style.animation = "slideInDisplay 1s";
    element.style.display = "flex";
}

const slideOutDisplay = (element)=>{
    element.style.animation = "slideOutDisplay 1s";
    setTimeout(()=>{element.style.display = "none"},900);
}

//Main menu display

const mainMenuButton = document.querySelector("[data-main-menu-btn]");
const mainMenu = document.querySelector("[data-main-menu]");

const menuDesktopDisplay = () => {
    let mainMenuVisibility = mainMenu.getAttribute("data-visible");
    while(window.innerWidth > 480){
        mainMenu.setAttribute("data-visible", true);
        mainMenu.style.animation = "none";
        mainMenu.style.display = "flex";
        break;
    }
    while(window.innerWidth <= 480 && mainMenuVisibility === "true"){
        mainMenu.style.display = "flex";
        mainMenuButton.style.backgroundImage="url(../../assets/img/icons/menu/x.svg)"
        break;
    }
};

setInterval(menuDesktopDisplay,100);

mainMenuButton.addEventListener("click",()=>{
    let mainMenuVisibility = mainMenu.getAttribute("data-visible");
    if(mainMenuVisibility === "false"){
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

settingsButton.addEventListener("click",()=>{displaySettings(setingsMenu);});
themeButton.addEventListener("click",()=>{displaySettings(themeMenu);});