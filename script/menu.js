const slideInDisplay = (element) =>{
    element.style.animation = "slideInDisplay 2s";
    element.style.display = "flex";
    display = true;
}

const slideOutDisplay = (element) =>{
    element.style.animation = "slideOutDisplay 2s";
    setTimeout(function(){element.style.display = "none"},2000);
}

const mainMenuButton = document.querySelector("[data-main-menu-btn]");
const mainMenu = document.querySelector("[data-main-menu]");

mainMenuButton.addEventListener("click",()=>{
    const displayStatus = mainMenu.getAttribute("data-visible");

    if(displayStatus == "false"){
        mainMenu.setAttribute("data-visible",true);
        slideInDisplay(mainMenu);
    }
    else if(displayStatus == "true"){
        mainMenu.setAttribute("data-visible",false);
        slideOutDisplay(mainMenu);
    }
});