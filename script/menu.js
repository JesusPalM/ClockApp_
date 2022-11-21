//Slide animation display

const slideInDisplay = (element) =>{
    element.style.animation = "slideInDisplay 2s";
    element.style.display = "flex";
    display = true;
}

const slideOutDisplay = (element) =>{
    element.style.animation = "slideOutDisplay 2s";
    setTimeout(()=>{element.style.display = "none"},2000);
}

//Main menu display

const mainMenuButton = document.querySelector("[data-main-menu-btn]");
const mainMenu = document.querySelector("[data-main-menu]");

mainMenuButton.addEventListener("click",()=>{
    const displayStatus = mainMenu.getAttribute("data-visible");

    if(displayStatus == "false"){
        mainMenu.setAttribute("data-visible",true);
        slideInDisplay(mainMenu);
        mainMenuButton.style.backgroundImage="url(../../assets/img/icons/menu/x.svg)"
    }
    else if(displayStatus == "true"){
        mainMenu.setAttribute("data-visible",false);
        slideOutDisplay(mainMenu);
        mainMenuButton.style.backgroundImage="url(../../assets/img/icons/menu/list.svg)"
    }
});


