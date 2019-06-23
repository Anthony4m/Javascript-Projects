const second_hand = document.querySelector(".second-hand");
const tickMinutesHand = document.querySelector(".min-hand");
const tickHourHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const seconds_degrees =( (seconds/60) * 360) + 90;
    second_hand.style.transform = `rotate(${seconds_degrees}deg)`;
    const  minute = now.getMinutes();
    const minute_degrees = ((minute / 60) * 360) + 90;
    tickMinutesHand.style.transform = `rotate(${minute_degrees}deg)`;
    const hour = now.getHours();
    const hour_degrees = ((hour / 12) * 360);
    tickHourHand.style.transform = `rotate ${hour_degrees}deg`;
    console.log(seconds);
    console.log(hour_degrees);
    console.log(minute_degrees);
    
}
setInterval(setDate,1000)




console.log(tickMinutesHand,tickHourHand)