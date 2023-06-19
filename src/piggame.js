"strict";

const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");

const currentScore1 = document.querySelector("#current-score1");
const currentScore2 = document.querySelector("#current-score2");
const btnNewGame = document.querySelector(".new-game");
const btnRollDice = document.querySelector(".roll-dice");
const btnHold = document.querySelector(".hold-score");
const diceElement = document.querySelector(".dice");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");

score1.textContent = 0;
score2.textContent = 0;
const scores = [0, 0, 0];
let currentScore = 0;
let activePlayer = 1;
let playing = true;
const winner1 = document.querySelector(".winner1");
const winner2 = document.querySelector(".winner2");

const switchPlayer = function () {
  document.getElementById(`current-score${activePlayer}`).textContent = 0;
  //Switching player
  activePlayer = activePlayer === 1 ? 2 : 1;
  currentScore = 0;
};
//Rolling dice functionslity
btnRollDice.addEventListener("click", function () {
  if (playing) {
    //creating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //Display dice
    diceElement.classList.remove("hidden");
    diceElement.src = `/IMAGES/dice-${dice}.png`;

    //Check for dice 1: if true, switch to next player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current-score${activePlayer}`).textContent =
        currentScore;
      // currentScore1.textContent = currentScore; This is just for the current score of player 1
    } else {
      switchPlayer();
    }
  }
});

//hold score button
btnHold.addEventListener("click", function () {
  if (playing) {
    //Add current score to active player score
    scores[activePlayer] += currentScore;
    //score[1] = score[1] + currentScore
    document.getElementById(`score${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.winner${activePlayer}`)
        .classList.remove("hidden");
      document.querySelector(`.player${activePlayer}`).style.backgroundColor =
        "black";
      document.querySelector(`.player${activePlayer}`).style.color = "white";
      diceElement.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

//The Newgame button
btnNewGame.addEventListener("click", function () {
  score1.textContent = 0;
  score2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  document.querySelector(`.player${activePlayer}`).style.backgroundColor =
    "black";
  document.querySelector(`.winner${activePlayer}`).classList.add("hidden");
  player1.style.backgroundColor = "#db095d";
  player1.style.color = "black";
  player.style.color = "black";

  player2.style.backgroundColor = "#de3e7e";
});
