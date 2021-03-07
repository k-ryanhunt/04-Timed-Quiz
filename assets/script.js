var viewHS;
var timer;
var secondsAllowed = 60;
var gameTimer = document.getElementById("gameTimer");
var startQuizBtn = document.querySelector(".startQuizBtn");


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

startQuizBtn.addEventListener("click", startQuiz);