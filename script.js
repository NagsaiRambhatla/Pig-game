"use strict";
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score1El = document.querySelector("#score--0");
const score2El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnnew = document.querySelector(".btn--new");
const btnroll = document.querySelector(".btn--roll");
const btnhold = document.querySelector(".btn--hold");
const currentscore0El = document.getElementById("current--0");
const currentscore1El = document.getElementById("current--1");

//Starting conditions
score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add("hidden");
let score = [0, 0];
let currentscore = 0;
let activeplayer = 0;
let playing = true;
const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  currentscore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnroll.addEventListener("click", function () {
  if (playing) {
    // generate a randomnumber
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);
    //display the correct dice image
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    // display the added currentscore only if it is not 1
    if (dice !== 1) {
      currentscore = currentscore + dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else {
      //switch active player
      switchplayer();
    }
  }
});
btnhold.addEventListener("click", function () {
  if (playing) {
    // console.log(score[activeplayer]);
    score[activeplayer] = score[activeplayer] + currentscore;
    // console.log(score[activeplayer]);
    // console.log(currentscore);
    document.getElementById(`score--${activeplayer}`).textContent =
      score[activeplayer];
    if (score[activeplayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove("player--active");
    }
    switchplayer();
  }
});
btnnew.addEventListener("click", function () {
  // removing the player winner class
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  // setting the score back to 0
  score1El.textContent = 0;
  score2El.textContent = 0;
  currentscore0El.textContent = 0;
  currentscore1El.textContent = 0;
  // hiding the dice jpg
  diceEl.classList.add("hidden");
  // checking for the score and resetting the score
  console.log(score);
  score[0] = 0;
  score[1] = 0;
  currentscore = 0;
  // switching the active player to player 0
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  playing = true;
});
