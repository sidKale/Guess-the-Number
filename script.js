"use strict";

const body = document.querySelector("body");
const message = document.querySelector(".message");
const reload = document.querySelector(".reload-game");
const choiceCheck = document.querySelector(".choice-check");
const userNumber = document.querySelector(".user-choice");
const correctNumber = document.querySelector(".correctNumber");
const chances = document.querySelector(".chances-left");
const highS = document.querySelector(".high-score");

let systemNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let chancesLeft = 25;

//Message
const showMessage = function (msg) {
  message.textContent = msg;
};

//check number
const validateNumber = function () {
  choiceCheck.addEventListener("click", function () {
    const userGuess = Number(userNumber.value);

    //check when user entered no number
    if (!userGuess) {
      showMessage("No Number Entered!!");
      message.style.color = "orangered";
    }

    //check if player wins
    else if (userGuess === systemNumber) {
      showMessage("💯 You Won");
      correctNumber.textContent = systemNumber;

      //change background
      body.style.background = "green";

      //set highscore
      if (chancesLeft > highScore) {
        highScore = chancesLeft;
        highS.textContent = highScore;
      }
    }

    //if user looses
    else if (userGuess !== systemNumber) {
      if (chancesLeft > 1) {
        chancesLeft--;
        chances.textContent = chancesLeft;
      } else {
        showMessage("Better Luck Next Time");
        chances.textContent = 0;
        body.style.background = "#FF0000";
        message.style.color = "snow";
        document.querySelector(".choice-limit").style.color = "snow";
      }
    }
  });
};
validateNumber();

//reset game
const resetGame = function () {
  systemNumber = Math.trunc(Math.random() * 20) + 1;
  chancesLeft = 25;
  showMessage("Start Guessing ...");
  chances.textContent = chancesLeft;
  correctNumber.textContent = "?";
  userNumber.value = "";
  body.style.background = "#5d5d5a";
  document.querySelector(".choice-limit").style.color = "#ffa45c";
  message.style.color = "#ffa45c";
};
document.querySelector(".reset-game").addEventListener("click", resetGame);

//reload game
reload.addEventListener("click", function () {
  window.location.reload();
});
