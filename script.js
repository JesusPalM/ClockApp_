//Time//

function currentTime(){
    let date = new Date();
    let hour = (date.getHours()-12); 
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if(hour<=9){
        hour = "0" + hour;
    }
    if(min<=9){
        min = "0" + min;
    }
    if(sec<=9){
        sec = "0" + sec;
    }
    if(date.getHours()>=12) {
        var am = "PM";
    }
    else{
        var am = "AM";     
    }   
    document.getElementById("hourBox").innerHTML =  hour + ":" + min + ":" + sec;
    document.getElementById("amPmBox").innerHTML = am;
    setTimeout(currentTime,1000);
}

let date = new Date();

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
    var dateName = date.toDateString();
    return dateName;
}

document.getElementById("dateBox").innerHTML = currentDateName();
currentTime();

//Screen//

var nightMode = document.getElementById("nightMode");
var exitscreen = document.getElementById("exitscreen");
var fullscreen = document.getElementById("fullscreen");

function fullScreen(){
    
    var element = document.documentElement;
    if (element.requestFullscreen) {
    element.requestFullscreen();
    }
    fullscreen.style.display = "none";
    exitscreen.style.display = "block";
}

function exitFullScreen(){
    if (document.exitFullscreen()) {
    document.exitFullscreen();
    }
    fullscreen.style.display = "block"; 
    exitscreen.style.display = "none"; 
}

//Interactive Menu//

var menu = document.getElementById("menuBox")

function closeMenu(){
    menu.style.top = "-100%";
}

function openMenu(){
    menu.style.top = "10%";
    menu.style.display = "block"; 
}

//Dark mode toggle_Currently under simplefycation with function bucle//

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