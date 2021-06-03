'use strict';

//secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;

//Score count
let score = 20;

//to display number =>
document.querySelector('.number').textContent = secretNumber;

// click on check to take input given by the user.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // console.log(
  //   `guess ${guess} and secrtNumebr ${secretNumber} and typeof ${typeof guess}`
  // );

  //Game Logic Begins Here.....
  //Empty Check.
  if (!guess) {
    document.querySelector(
      '.message'
    ).textContent = `⚠️ No number entered 🙁  `;
    console.log(`No number entered.🙁 `);
  }
  //Correct Answer.
  else if (guess === secretNumber) {
    document.querySelector(
      '.message'
    ).textContent = `You guessed My Number!🤯 `;
    document.querySelector('.highscore').textContent = score;
  }
  //Number is Less
  else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = `Too high. 📈`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `You Lost the Game 😈  Try again Next Time.`;
    }
  }

  //Number is Larger
  else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = `Too Low. 📉`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `You Lost the Game 😈  Try again Next Time.`;
    }
  }
});
