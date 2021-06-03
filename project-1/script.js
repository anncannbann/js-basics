'use strict';

//secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;

//Score count
let score = 5;

//to display number => document.querySelector('.number').textContent = secretNumber;

// click on check to take input given by the user.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // console.log(
  //   `guess ${guess} and secrtNumebr ${secretNumber} and typeof ${typeof guess}`
  // );

  //Game Logic Begins Here.....
  //No input and check button clicked.
  if (!guess) {
    document.querySelector(
      '.message'
    ).textContent = `⚠️ No number entered 🙁  `;
    console.log(`No number entered.🙁 `);
  }

  //Correct Answer aka PLayer Winsssssssssss.
  else if (guess === secretNumber) {
    document.querySelector(
      '.message'
    ).textContent = `You guessed My Number!🤯 `;
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#fe4a49';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }

  //Number is Higher than the Secret number
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too high. 📈`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `You Lost the Game 😈  Try again Next Time.`;
      document.querySelector('.score').textContent = 0;
    }
  }

  //Number is Smaller than the Secret Number.
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too Low. 📉`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `You Lost the Game 😈  Try again Next Time.`;
      document.querySelector('.score').textContent = 0;
    }
  }
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
