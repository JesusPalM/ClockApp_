//Slide animation display

function slideInDisplay(element) {
    element.style.animation = "slideInDisplay 1s";
    element.style.display = "flex";
    display = true;
}

const slideOutDisplay = (element) =>{
    element.style.animation = "slideOutDisplay 1s";
    setTimeout(()=>{element.style.display = "none"},900);
}

//Main menu display

const mainMenuButton = document.querySelector("[data-main-menu-btn]");
const mainMenu = document.querySelector("[data-main-menu]");

mainMenuButton.addEventListener("click",()=>{
    const displayStatus = mainMenu.getAttribute("data-visible");
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
