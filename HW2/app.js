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

  function sendMessage(message) {
    alert(message);
  }
  
  function startCounter() {
    let count = 0;
    const interval = 30000;
  
    function handleInterval() {
      count++;
      
      switch (count) {
        case 1:
          sendMessage("Прошло уже 5 минут, смотрю тебя это заворожило");
          break;
        case 2:
          sendMessage("Прошло уже 10 минут, мне кажется у тебя должны быть дела поважнее");
          break;
        case 3:
          sendMessage("Слушай, ты смотришь на то как крутится планета 15 минут, ничего не поменяется, если ты просто продолжишь смотреть");
          break;
        case 4:
          sendMessage("20 минут, целых 20 минут ты на это смотришь, знаешь, делай что хочешь");
          break;
        case 5:
          sendMessage("25 минут? Тебе что, больше заняться нечем? Может если я расскажу анекдот ты уйдешь?\
          \nАнекдот:\
          \nПриходит мужик к врачу и говорит: \n - Доктор, у меня пах чешится\
          \n - Мой чаще \n - Нет, мой");
          break;
        case 6:
          sendMessage("30 минут, пожалуй я просто сброшу счетчик и начну заново");
          count = 0;
          break;
        default:
          sendMessage("Ошибка: непредвиденное значение счетчика.");
          count = 0;
          break;
      }
  
      setTimeout(handleInterval, interval);
    }
  
    setTimeout(handleInterval, interval);
  }
  
  startCounter();  
}

function stopRotation() {
  clearInterval(intervalId);
  clearTimeout(timeoutId);
}

startBtn.addEventListener("click", startRotation);
stopBtn.addEventListener("click", stopRotation);
