var playerListEl = document.querySelector("#player-list");
var pointsListEl = document.querySelector("#points-list");

var scores = [];

// window.localStorage.getItem("playerName");
// JSON.parse(window.localStorage.getItem("playerName"));
// console.log(lastHighscores);
// playerListEl.append("lastHighscores.initials");

function renderScores() {
  playerListEl.innerHTML = '';

  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];

    var li = document.createElement('li');
    li.textContent = score;
    li.setAttribute('data-index', i);

    li.append(li);
  }
}


function init() {
  var storedScores = JSON.parse(localStorage.getItem("playerName"));

  if (storedScores !== null) {
    playerName = storedScores;
  }
  renderScores();
}

function storeScores() {
  playerName.push()
}