var viewHS;
var timer;
var secondsAllowed = 60;
var points;
var gameTimer = document.getElementById("gameTimer");
var startQuizBtn = document.querySelector(".startQuizBtn");
var correctChoice = document.getElementById("correctChoice");
var incorrectChoice = document.getElementsByClassName(".incorrectChoice");

// Sets the timer and produces the first question
function startQuiz() {
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
}

function questionTwo() {
  document.getElementById("questionTwo").style.display = "block";
  document.getElementById("questionOne").style.display = "none";
}

function questionThree() {
  document.getElementById("questionThree").style.display = "block";
  document.getElementById("questionTwo").style.display = "none";
}

function questionFour() {
  document.getElementById("questionFour").style.display = "block";
  document.getElementById("questionThree").style.display = "none";
}

function questionFive() {
  document.getElementById("questionFive").style.display = "block";
  document.getElementById("questionFour").style.display = "none";
}

function endGame() {
    
}

// Alerts that pop up when user picks the correct or incorrect answer.
function correctAlertMessage() {
  document.getElementById("correctAlert").style.display = "block";
}

function incorrectAlertMessage() {
  document.getElementById("incorrectAlert").style.display = "block";
  secondsAllowed -= 5;
  document.getElementById("gameTimer").innerHTML = secondsAllowed;
}

startQuizBtn.addEventListener("click", startQuiz);