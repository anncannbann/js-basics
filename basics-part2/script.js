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




//Objectssssss key value pairs
/*
const jArray= [
    'John',
    'Smith',
    2047-283,
    'teacher',
    ['a','b','v']

];

//OBJECTS


// Just like arrays, we use objects to group together diff variables which belong together. 
//obj vs arrray, in objects, order of the values do not mater when we want to rtrieve that.Arrays order number matters alot cause thats how we retrieve it.
//Use array for ordered type of data and obj for unordered data like below.



//way 1 :Object Literal Syntax(literally writing the content).
//this obj has 5 properties. 
const jobj= {
    firstName : 'John',
    lastName : 'Smith',
    age: 2021-1998,
    job: 'teacher',
    kids: ['a','b','v']
};
*/

//DOT VS BRACKET NOTATION TO RETRIVE DATA
/*
const jobj= {
    firstName : 'John',
    lastName : 'Smith',
    age: 2021-1998,
    job: 'teacher',
    kids: ['a','b','v']
};
console.log(jobj);

//dot notation
console.log(jobj.lastName);

//bracket
console.log(jobj['firstName']);



//Stored the Repeating Part, And it will retrieve firstName and lastName. Cannot do this with dot operator.
const namekey = 'Name';
console.log(jobj['first'+namekey]);
console.log(jobj['last'+namekey]);

//console.log(jobj.'last'+ namekey); error


const interestedIn = prompt('What do you want to know about John? Choose between firstName,lastName,age,job or kids');
if(jobj[interestedIn]){
    console.log(jobj[interestedIn]);
}
else{
    console.log("Not Found,please Check input");
}
*/
/*
//USING BOTH TOGETHER
const jobj= {
    firstName : 'John',
    lastName : 'Smith',
    age: 2021-1998,
    job: 'teacher',
    kids: ['a','b','v']
};
jobj.location = 'Unknown';
jobj['twitter'] ='@johnsmith69';
console.log(jobj);

//Small Challenge
//Jonas has 3 kids and his first child is v

//My answer
console.log(`${jobj.firstName} has ${jobj.kids.length} kids and his first child is ${jobj.kids[2]}`);

*/


//OBJECT Methods
/*
const jobj= {
    firstName : 'John',
    lastName : 'Smith',
    byear: 1998,
    job: 'teacher',
    kids: ['a','b','v'],
    hasDrivers: true,

    //function value    
    //calcAge: function(byear){
    //     return 2021- byear;
    //}
    

    //this keyword
    
    // calcAge: function(){
    //     console.log(this);
    //     return 2021- this.byear;
    // }

    //since of we call that function multiple times. 
    calcAge: function(){
        this.age = 2021- this.byear;
        return ;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.age} ${this.job} and he has ${this.hasDrivers ? 'a' :'no' } driver's license.`;


    }
};


//way1 for normal function value
//console.log(jobj.calcAge(jobj.byear));

//way2
//console.log(jobj['calcAge'](jobj['byear']));

console.log(jobj.calcAge());
console.log(jobj.getSummary());
*/



//LOOOOOPPPPSSSSSS

//For loop
// for (let i = 1;i <= 10;i++){
//     console.log(`First Loop ever! ${i}`)
// }

//For loop Array

const jArray= [
    'John',
    'Smith',
    2047-283,
    'teacher',
    ['a','b','v']
];

const types = [];

for (let i = 0; i <= jArray.length;i++){
    
    console.log(`${i} is ${jArray[i]} and has type ${typeof jArray[i]}`);
    //one way
    //types[i] = typeof jArray[i];
    
    //using push
    types.push(typeof jArray[i]);
}

console.log(`types Array is ${types}`);




const years = [1969,2020,1988,1999,2000];
const ages = [];

for (let i = 0; i<years.length; i++){
    ages[i] = 2021- years[i];
}

console.log(`Byear of everyone is ${years}`)
console.log(`Ages of everyone is ${ages}`)

//continue and break statement
console.log('------------------ONLY FANS:STRING EDITION---------------------')
for (let i = 0;i<jArray.length;i++){
    if(typeof jArray[i] !== 'string') continue;
    console.log(jArray[i],typeof jArray[i]);
}

console.log('-----------------ONLY FANS:BREAK with NUMBER EDITION------------------')
for (let i = 0;i<jArray.length;i++){
    if(typeof jArray[i] !== 'number') break;
    console.log(jArray[i],typeof jArray[i]);
}

