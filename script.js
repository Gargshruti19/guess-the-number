'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);
*/

//variables assign
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const backgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const boxWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const displayHighScore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};
const inputValue = function (guess) {
  document.querySelector('.guess').value = guess;
};

//code starts - actual game code
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');
    //When Player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);
    backgroundColor('#60b347');
    boxWidth('30rem');
    if (score > highscore) {
      highscore = score;
      displayHighScore(highscore);
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? ' 📈Too High!' : '📈Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
  //   //when guess to too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//Game reset functionality by pressing again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayScore(score);
  displayNumber('?');
  inputValue('');
  displayMessage('Start guessing...');
  backgroundColor('#222');
  boxWidth('15rem');
});
