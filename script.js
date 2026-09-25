//your code here
function setClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Each unit's degree value
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = ((minutes + seconds / 60) / 60) * 360 + 90;
  const hoursDegrees = (((hours % 12) + minutes / 60) / 12) * 360 + 90;

  const secondHand = document.querySelector('.second-hand');
  const minHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setClock, 1000);
setClock(); // call immediately so the clock doesn't start blank for the first second