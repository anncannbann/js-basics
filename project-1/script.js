'use strict';

//secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

//Score count
let score = 10;
let highscore = 0;

//to display number => document.querySelector('.number').textContent = secretNumber;

// click on check to take input given by the user.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //Game Logic Begins Here.....
  //
  //No input and check button clicked.
  if (!guess) {
    displayMessage(`⚠️ No number entered 🙁  `);
    console.log(`No number entered.🙁 `);
  }

  //Correct Answer aka PLayer Winsssssssssss.
  else if (guess === secretNumber) {
    displayMessage(`You guessed My Number!🤯 `);

    document.querySelector('body').style.backgroundColor = '#fe4a49';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      console.log(`score is ${score} and highscore is cuurently ${highscore}`);
    }
  }

  // //Number is Higher than the Secret number
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = `Too high. 📈`;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector(
  //       '.message'
  //     ).textContent = `You Lost the Game 😈  Try again Next Time.`;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // //Number is Smaller than the Secret Number.
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = `Too Low. 📉`;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector(
  //       '.message'
  //     ).textContent = `You Lost the Game 😈  Try again Next Time.`;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  //
  //
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? `Too high. 📈` : `Too Low. 📉`;
      displayMessage(guess > secretNumber ? `Too high. 📈` : `Too Low. 📉`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`You Lost the Game 😈  Try again Next Time.`);
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;

  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  console.log(secretNumber);
});

//Reducing Repetitive Code by Making a function for it.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
