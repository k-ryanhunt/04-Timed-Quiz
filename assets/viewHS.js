var playerListEl = document.querySelector("#player-list");
var clear = document.getElementById("clear");

var storedScores = JSON.parse(localStorage.getItem("score")) || [];
for (let i = 0; i < storedScores.length; i++) {
  var highscore = storedScores[i];
  var ul = document.createElement("ul");
  ul.textContent = `${highscore.initials} - ${highscore.score} POINTS`;
  playerListEl.append(ul);
}

function clearScores() {
  if (storedScores.length >= 10) {
    localStorage.removeItem("score");
    return;
  }
  localStorage.clear();
  ul.textContent = `No Highscores have been detected`;
}

clear.addEventListener("click", clearScores);