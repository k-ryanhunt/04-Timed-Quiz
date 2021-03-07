var viewHS;
var timer;
var secondsAllowed = 60;
var points;
var gameTimer = document.getElementById("gameTimer");
var startQuizBtn = document.querySelector(".startQuizBtn");
var correctChoice = document.getElementById("correctChoice");
var incorrectChoice = document.getElementById("incorrectChoice");

function startQuiz() {
  setTimer();
  questionTwo();
  questionThree();
  questionFour();
  questionFive();
}

// Sets the timer and produces the first question
function setTimer() {
  timer = setInterval(function () {
    secondsAllowed--;
    gameTimer.textContent = secondsAllowed;
    if (secondsAllowed === 0) {
      clearInterval(secondsAllowed);
    }
  }, 1000);
  questionOne();
}

// Depending on whether or not the user selects the correct answer, an alert will appear
function questionOne() {
  document.getElementById("questionOne").style.display = "block";
  document.getElementById("rules").style.display = "none";

  if (correctChoice.addEventListener("click", correctAlertMessage)) {
    document.getElementById("correctAlert").style.display = "block";
  }

  if (incorrectChoice.addEventListener("click", incorrectAlertMessage)) {
    document.getElementById("incorrectAlert").style.display = "block";
  }
}

function questionTwo() {
  setTimeout(2000);
  document.getElementById("questionTwo").style.display = "block";
  document.getElementById("questionOne").style.display = "none";

  if (correctChoice.addEventListener("click", correctAlertMessage)) {
    document.getElementById("correctAlert").style.display = "block";
  }

  if (incorrectChoice.addEventListener("click", incorrectAlertMessage)) {
    document.getElementById("incorrectAlert").style.display = "block";
  }
}

function questionThree() {
  document.getElementById("questionThree").style.display = "block";
  document.getElementById("questionTwo").style.display = "none";
  if (correctChoice.addEventListener("click", correctAlertMessage)) {
    document.getElementById("correctAlert").style.display = "block";
  }

  if (incorrectChoice.addEventListener("click", incorrectAlertMessage)) {
    document.getElementById("incorrectAlert").style.display = "block";
  }
}

function questionFour() {
  document.getElementById("questionFour").style.display = "block";
  document.getElementById("questionThree").style.display = "none";
  if (correctChoice.addEventListener("click", correctAlertMessage)) {
    document.getElementById("correctAlert").style.display = "block";
  }

  if (incorrectChoice.addEventListener("click", incorrectAlertMessage)) {
    document.getElementById("incorrectAlert").style.display = "block";
  }
}

function questionFive() {
  document.getElementById("questionFive").style.display = "block";
  document.getElementById("questionFour").style.display = "none";
  if (correctChoice.addEventListener("click", correctAlertMessage)) {
    document.getElementById("correctAlert").style.display = "block";
  }

  if (incorrectChoice.addEventListener("click", incorrectAlertMessage)) {
    document.getElementById("incorrectAlert").style.display = "block";
  }
}

function correctAlertMessage() {
  document.getElementById("correctAlert").style.display = "block";
  setTimeout(2000);
}

function incorrectAlertMessage() {
  document.getElementById("incorrectAlert").style.display = "block";
  secondsAllowed -= 5;
  document.getElementById("gameTimer").innerHTML = secondsAllowed;
  setTimeout(2000);
}

startQuizBtn.addEventListener("click", startQuiz);
correctChoice.addEventListener("click", correctAlertMessage);
incorrectChoice.addEventListener("click", incorrectAlertMessage);
