const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    // console.log('hi');
    const now = new Date();

    // // .... seconds ....
    const seconds = now.getSeconds();
    // console.log(seconds);
    const secondsDegree = ((seconds / 60) * 360) + 90;
    // console.log(secondsDegree);
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    // // .... minutes ....
    const minutes = now.getMinutes();
    // console.log(minutes);
    const minutesDegree = ((minutes / 60) * 360) + 90;
    // console.log(minutesDegree);
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    // // .... hours ....
    const hours = now.getHours();
    // console.log(hours);
    const hoursDegree = ((hours / 12) * 360) + 90;
    // console.log(hoursDegree);
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}
setInterval(setDate, 1000);
