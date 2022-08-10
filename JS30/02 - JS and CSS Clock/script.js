const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function getTime() {
    const currDate = new Date;
    let sec = currDate.getSeconds();
    const min = currDate.getMinutes();
    const hour = currDate.getHours();       
    secHand.style.transform = `rotate(${getDeg(sec, 60)}deg)`;
    minHand.style.transform = `rotate(${getDeg(min, 60)}deg)`;
    hourHand.style.transform = `rotate(${getDeg(hour, 12)}deg)`;
    console.log(sec);  
}

function getDeg(time, val) {
    const timeDeg = Math.round((time/val)*360+90);
    return timeDeg;
}

setInterval(getTime, 1000);