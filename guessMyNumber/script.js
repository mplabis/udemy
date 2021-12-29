'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number';

// document.querySelector('.number').textContent = 11;
// document.querySelector('.score').textContent = 69;
// document.querySelector('.guess').value = 23;
// let message;
// function secret() {
//   secretNumber = Math.trunc(Math.random() * 20 + 1);
//   score = 20;
//   console.log(secretNumber);

//   message.textContent = 'Start guessing...';
//   document.querySelector('body').style.backgroundColor = 'black';
//   document.querySelector('.number').style.width = '15rem';
//   score = 20;
//   document.querySelector('document.querySelector('.score').textContent = score;
// number').textContent = '?';
//   document.querySelector('.guess').value = '';
// }
// secret();
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
console.log(secretNumber);
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('no number');
  } else if (guess === secretNumber) {
    displayMessage('you guess the number right');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      displayMessage('your guess is higher');
      score--;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      displayMessage('your guess is lower');
      score--;
    }
  }
  document.querySelector('.score').textContent = score;
  if (score === 0) {
    displayMessage('GAME OVER!!!');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
