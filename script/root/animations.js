export const slideInDisplay = (element)=>{
    element.style.animation = "slideInDisplay 1s";
    element.style.display = "flex";
};

export const slideOutDisplay = (element)=>{
    element.style.animation = "slideOutDisplay 1s";
    setTimeout(()=>{element.style.display = "none"},900);
};