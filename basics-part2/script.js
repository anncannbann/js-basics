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


//arrow for multiple - shoudnt use. Complicated. 
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


//Arrays
/*
//way1
const friends = ['Joey','Phoebe','Chandler','Ross'];
console.log(friends);

//way2
const years = new Array(1998,2665,1111,5555,2525);

//Manipulations
console.log(years);
console.log(years[years.length-1]);

friends[friends.length] = 'Monica';
console.log(friends);

friends.pop();
console.log(friends);


friends[friends.length] =69;
console.log(friends);

friends[friends.length] = ['So','There','You','Go'];
console.log(friends);



const calcAge = function(birth){
    return 2021 - birth;
}
const y = [1990,1992,1998,2000,1989,1969];

*/
/*
//array Operations

const friends = ['Joey','Phoebe','Chandler','Ross'];
console.log(friends);

//Add
friends.push('Monica');
console.log(friends);

//Puts the element added as the first!!!!???!!
friends.unshift('Rachel');
console.log(friends);

//Removes the last.
const popped = friends.pop();
//Can return the popped element. Useful for some cases.
console.log(popped)
console.log(friends);

//Removes First!!!!
friends.shift();
console.log(friends);


//to check an element position
console.log(friends.indexOf('Joey'));
console.log(friends.indexOf('Rachel')); //Doesnt Exist.

//es6 method for finding element = Returns True or False, uses strict. will not work fo rtype coehersion.
friends.push(22);
console.log(friends.includes('Joey'));
console.log(friends.includes('Rachel'));

//uses strict. will not work fo type coehersion.
console.log(friends.includes('22')); //False
console.log(friends.includes(22)); //True
*/




