//for strict mode
'use strict';


//functions intro
/*
function logger(name)
{
    console.log(`Hello ${name}`);

}
logger('User');
logger('John');
logger('Jane');

*/

//function calling and using return.
/*
function fruit(apples,orange){
    console.log(apples,orange);
    const juice = `Juice with ${apples} apples and ${orange} oranges`;
    return juice;
}

const x = fruit(10,4);
console.log(x);
console.log(fruit(9,8));
*/


//ARROW FUNCTION 1 line code
/*
const c = birth => 2021-birth;
const x = c(1998);
console.log(x);
*/


//arrow for multiple - shoudlnt use. Complicated. 
// Arrow function doesnt allow this keyword thats why should use normal functions instead.
/* 
const yearUntillRetirement = (birth,firstname) =>{
    const age = 2020- birth;
    const retire = 65-age;
    //return retire;
    return `${firstname} retires in ${retire} years`;
}
console.log(yearUntillRetirement(1998,'Bani'));
*/


//Function calling inside another.
/*
function fruit(apples,orange){
    const applepieces = cutfruit(apples);
    const orangepieces = cutfruit(orange);
    
    console.log(apples,orange);
    const juice = `Juice with ${applepieces} apples and ${orangepieces} oranges`;
    return juice;
}

function cutfruit(fruit){
    return fruit*4;
}


console.log(fruit(2,3));

*/



