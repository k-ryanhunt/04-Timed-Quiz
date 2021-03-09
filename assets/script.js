var viewHS;
var timer;
var secondsAllowed = 5;
var results;
var score = 0;
var grade = document.getElementById("grade");
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
      clearInterval(timer);
      resultScreen();
    }
  }, 1000);
  questionOne();
}

//Question One
function questionOne() {
  document.getElementById("questionOne").style.display = "block";
  document.getElementById("rules").style.display = "none";
}

function correctAlertMessage1() {
  document.getElementById("correctAlert1").style.display = "block";
  setTimeout(questionTwo, "1000");
  score += 20;
}

function incorrectAlertMessage1() {
  document.getElementById("incorrectAlert1").style.display = "block";
  secondsAllowed -= 5;
  document.getElementById("gameTimer").innerHTML = secondsAllowed;
  setTimeout(questionTwo, "1000");
}

//Question Two
function questionTwo() {
  document.getElementById("questionTwo").style.display = "block";
  document.getElementById("questionOne").style.display = "none";
}

function correctAlertMessage2() {
  document.getElementById("correctAlert2").style.display = "block";
  setTimeout(questionThree, "1000");
  score += 20;
}

function incorrectAlertMessage2() {
  document.getElementById("incorrectAlert2").style.display = "block";
  secondsAllowed -= 5;
  setTimeout(questionThree, "1000");
}
// Question Three
function questionThree() {
  document.getElementById("questionThree").style.display = "block";
  document.getElementById("questionTwo").style.display = "none";
}

function correctAlertMessage3() {
  document.getElementById("correctAlert3").style.display = "block";
  setTimeout(questionFour, "1000");
  score += 20;
}

function incorrectAlertMessage3() {
  document.getElementById("incorrectAlert3").style.display = "block";
  secondsAllowed -= 5;
  setTimeout(questionFour, "1000");
}

// Question Four
function questionFour() {
  document.getElementById("questionFour").style.display = "block";
  document.getElementById("questionThree").style.display = "none";
}

function correctAlertMessage4() {
  document.getElementById("correctAlert4").style.display = "block";
  setTimeout(questionFive, "1000");
  score += 20;
}

function incorrectAlertMessage4() {
  document.getElementById("incorrectAlert4").style.display = "block";
  secondsAllowed -= 5;
  setTimeout(questionFive, "1000");
}

// Question Five
function questionFive() {
  document.getElementById("questionFive").style.display = "block";
  document.getElementById("questionFour").style.display = "none";
}

function correctAlertMessage5() {
  document.getElementById("correctAlert5").style.display = "block";
  setTimeout(resultScreen, "1000");
  score += 20;
}

function incorrectAlertMessage5() {
  document.getElementById("incorrectAlert5").style.display = "block";
  secondsAllowed -= 5;
  setTimeout(resultScreen, "1000");
}

function resultScreen() {
  document.getElementById("inputInitialScreen").style.display = "block";
  document.getElementById("questionOne").style.display = "none";
  document.getElementById("questionTwo").style.display = "none";
  document.getElementById("questionThree").style.display = "none";
  document.getElementById("questionFour").style.display = "none";
  document.getElementById("questionFive").style.display = "none";
  document.getElementById("rules").style.display = "none";
  results = setInterval(function () {
    score;
    grade.textContent = score;
  });
}

startQuizBtn.addEventListener("click", startQuiz);