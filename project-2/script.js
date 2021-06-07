'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');

//Node list, becausw we have three btns in the same class.
//IF we use query sElector simply, it will only select the first one.
const btnsOpen = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpen.length; i++) {
  console.log(btnsOpen[i].textContent);
}
