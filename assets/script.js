var viewHS;
var timer;
var secondsAllowed = 60;
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
    if (secondsAllowed <= 0) {
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
  setTimeout(questionTwo, "300");
  score += 20;
}

function incorrectAlertMessage1() {
  document.getElementById("incorrectAlert1").style.display = "block";
  secondsAllowed -= 5;
  setTimeout(questionTwo, "300");
}

//Question Two
function questionTwo() {
  document.getElementById("questionTwo").style.display = "block";
  document.getElementById("questionOne").style.display = "none";
}

function correctAlertMessage2() {
  document.getElementById("correctAlert2").style.display = "block";
  setTimeout(questionThree, "300");
  score += 20;
}

function incorrectAlertMessage2() {
  document.getElementById("incorrectAlert2").style.display = "block";
  secondsAllowed -= 5;
  setTimeout(questionThree, "300");
}
// Question Three
function questionThree() {
  document.getElementById("questionThree").style.display = "block";
  document.getElementById("questionTwo").style.display = "none";
}

function correctAlertMessage3() {
  document.getElementById("correctAlert3").style.display = "block";
  setTimeout(questionFour, "300");
  score += 20;
}

function incorrectAlertMessage3() {
  document.getElementById("incorrectAlert3").style.display = "block";
  secondsAllowed -= 5;
  setTimeout(questionFour, "300");
}

// Question Four
function questionFour() {
  document.getElementById("questionFour").style.display = "block";
  document.getElementById("questionThree").style.display = "none";
}

function correctAlertMessage4() {
  document.getElementById("correctAlert4").style.display = "block";
  setTimeout(questionFive, "300");
  score += 20;
}

function incorrectAlertMessage4() {
  document.getElementById("incorrectAlert4").style.display = "block";
  secondsAllowed -= 5;
  setTimeout(questionFive, "300");
}

// Question Five
function questionFive() {
  document.getElementById("questionFive").style.display = "block";
  document.getElementById("questionFour").style.display = "none";
}

function correctAlertMessage5() {
  document.getElementById("correctAlert5").style.display = "block";
  setTimeout(resultScreen, "300");
  score += 20;
}

function incorrectAlertMessage5() {
  document.getElementById("incorrectAlert5").style.display = "block";
  secondsAllowed -= 5;
  setTimeout(resultScreen, "300");
}

// Clean up code and consolidate. This is coded just to have a map of what this section needs to do.
function resultScreen() {
  document.getElementById("inputInitialScreen").style.display = "block";
  document.getElementById("questionFive").style.display = "none";
  document.getElementById("questionFour").style.display = "none";
  document.getElementById("questionThree").style.display = "none";
  document.getElementById("questionTwo").style.display = "none";
  document.getElementById("questionOne").style.display = "none";
  results = setInterval(function () {
    score;
    grade.textContent = score + secondsAllowed;
  });
  clearInterval(timer);
}

startQuizBtn.addEventListener("click", startQuiz);

var initialFormEl = document.getElementById("enterInitials");
var userInput = document.getElementById("userInput");
var playerListEl = document.getElementById("player-list");
var submitBtn = document.querySelector("#submitBtn");

function handleFormSubmit(event) {
  event.preventDefault();
  var userText = userInput.value.trim();
  var storedScores = JSON.parse(localStorage.getItem("score")) || [];
  var namePlayer = {
    initials: userInput.value,
    score: grade.textContent,
  };
  storedScores.push(namePlayer);
  localStorage.setItem("score", JSON.stringify(storedScores));
  if (userText === "") {
    return;
  } else {
    playerListEl.append(userInput.value + " - " + grade.textContent + " POINTS");
  }
}

initialFormEl.addEventListener("submit", handleFormSubmit);