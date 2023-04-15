const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")

let intervalId;
let timeoutId; 
let angle = 0; 

function startRotation() {
  const mainCircle = document.querySelector(".main_circle");
  const circle = document.querySelector(".circle");
  let radius = 220;
  let speed = 0.04;

  const rotateCircle = () => {
    angle += speed;
    if (angle >= 2 * Math.PI) {
      angle = 0;
    }
    let x =
      mainCircle.offsetWidth / 2 +
      radius * Math.cos(angle) -
      circle.offsetWidth / 2;
    let y =
      mainCircle.offsetHeight / 2 +
      radius * Math.sin(angle) -
      circle.offsetHeight / 2;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
  };

  clearInterval(intervalId); 
  intervalId = setInterval(rotateCircle, 20); 

  clearTimeout(timeoutId); 
  timeoutId = setTimeout(function () {
    alert(
      "Земля крутится уже пять минут, может уже пора остановиться просто смотреть на нее?"
    );
  }, 30000); 
}

function stopRotation() {
  clearInterval(intervalId);
  clearTimeout(timeoutId);
}

startBtn.addEventListener("click", startRotation);
stopBtn.addEventListener("click", stopRotation);
