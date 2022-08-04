window.addEventListener("keydown", function(event) {
const audio = document.querySelector(`audio[data-key='${event.code}']`);
const key = document.querySelector(`.key[data-key='${event.code}']`);
if (!audio) return;
audio.currentTime = 0;
audio.play();
key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", function(event) {
    if (event.propertyName !== "transform") {return} 
    key.classList.remove("playing");
 }));

