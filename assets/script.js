var viewHS;
var timer;
var secondsAllowed = 60;
var gameTimer = document.getElementById("gameTimer");
var startQuizBtn = document.querySelector(".startQuizBtn");
var correctOne = document.getElementById('correctChoice');


function startQuiz() {
    
    setTimer();
}

// Sets the timer and produces the first question
function setTimer() {
    timer = setInterval(function() {
        secondsAllowed--;
        gameTimer.textContent = secondsAllowed;
        if (secondsAllowed === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
    document.getElementById('questionOne').style.display = 'block';
    document.getElementById('rules').style.display = 'none';
}

// Depending on whether or not the user selects the correct answer, an alert will appear
function questionOne() {
    if(onclick === document.getElementById('correctChoice')) {
        document.getElementById('correctAlert').style.display = 'block';
    } else {
        document.getElementById('incorrectAlert').style.display = 'block';
    }
}

startQuizBtn.addEventListener("click", startQuiz);
correctOne.addEventListener("click", questionOne);