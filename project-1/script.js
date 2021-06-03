'use strict';

// click on check to take input given by the user.
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector(
      '.message'
    ).textContent = `⚠️ No number entered 🙁  `;
    console.log(`No number entered.🙁 `);
  }
});
