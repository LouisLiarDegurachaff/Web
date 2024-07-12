const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});
// hide style switcher on scroll
window.addEventListener('scroll', () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});
// change style on click
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyle.forEach(style => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
        }
    })
}
// change theme light or dark
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener('click', () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.querySelector("body").classList.toggle("dark");
});
window.addEventListener('load', () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.remove("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
//BGM
const audioToggle = document.querySelector(".bgm-toggler");
document.querySelector("#myAudio").volume = 0.5;
audioToggle.addEventListener('click', () => {
    audioToggle.querySelector("i").classList.toggle("fa-volume-up");
    audioToggle.querySelector("i").classList.toggle("fa-volume-off");
    document.querySelector("#myAudio").paused ? document.querySelector("#myAudio").play() : document.querySelector("#myAudio").pause();
});