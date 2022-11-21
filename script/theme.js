const tabColor = document.querySelector('meta[name="theme-color"]');
const buttonLightMode = document.querySelector("[data-theme-light]");

buttonLightMode.addEventListener("click",()=>{
    tabColor.setAttribute('content', '#020001');
    console.log("Light Mode")
});