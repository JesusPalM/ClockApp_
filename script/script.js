/*Time 
//Bug foung when the sec counter gets to 59 secs.
//currentTime to be fixed 

function currentTime(){
    let date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    if(hour<=9){
        hour = "0" + hour;
    }
    if(min<=9){
        min = "0" + min;
    }
    if(sec<=9){
        sec = "0" + sec;
    }
    if(date.getHours()>=12 && date.getSeconds()>=0){
        var am = "PM";
    }
    else{
        var am = "AM";     
    }
}

date = new Date();

function currentDateNumber(){
    let year = date.getFullYear();
    let month = (date.getUTCMonth() + 1);
    let day = date.getDate();
    if(month<=9){
        month = "0" + month;
    }
    if(day<=9){
        day = "0" + day;
    }
    return "(" + day + "/" + month + "/" + year + ")"; 
}

function currentDateName(){
    let dateName = date.toDateString();
    document.getElementById("dateBox").innerHTML = dateName;
}

currentDateName();
currentTime();

Screen

const nightMode = document.getElementById("nightMode");
const exitscreen = document.getElementById("exitscreen");
const fullscreen = document.getElementById("fullscreen");
const ClockApp_ = document.getElementById("ClockApp_");
const footerContainer = document.getElementById("footerContainer");

function fullScreen(){
    let element = document.documentElement;
    if (element.requestFullscreen) {
    element.requestFullscreen();
    }
    fullscreen.style.display = "none";
    exitscreen.style.display = "block";
    ClockApp_.style.display = "none";
    footerContainer.style.display = "none";
}

function exitFullScreen(){
    if (document.exitFullscreen()) {
    document.exitFullscreen();
    }
    fullscreen.style.display = "block"; 
    exitscreen.style.display = "none";
    ClockApp_.style.display = "block";
    footerContainer.style.display = "flex"; 
}

//Dark mode toggle. NEEDED A FUNCTION BUCLE

function darkMode(){
    var body = document.body;
    body.classList.toggle("bodyDarkMode");
    
    var icon = document.getElementsByClassName("icon")[0];
    icon.classList.toggle("iconsDarkMode");

    var icon = document.getElementsByClassName("icon")[1];
    icon.classList.toggle("iconsDarkMode");

    var icon = document.getElementsByClassName("icon")[2];
    icon.classList.toggle("iconsDarkMode");

    var icon = document.getElementsByClassName("icon")[3];
    icon.classList.toggle("iconsDarkMode");    
}
*/