let isRunning = false;
let timer;

let seconds = 0;
let minutes = 0;
let hours = 0;

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function updateDisplay() {
  document.getElementById('display').innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function incrementTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function startStop() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(incrementTime, 100); // Zamanlayıcıyı daha sık çağırma
    document.getElementById('startStopButton').innerHTML = '<i class="bi bi-pause-circle"></i>';
  } else {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('startStopButton').innerHTML = '<i class="bi bi-play-circle"></i>';
  }
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById('startStopButton').innerHTML = '<i class="bi bi-play-circle"></i>';
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}


