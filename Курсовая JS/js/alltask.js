'use strict';

// let currentDate = new Date();
// console.log(`${currentDate.toDateString()}`);


let storage = localStorage.getItem('tasks');
console.log(storage);

// let storage = localStorage.getItem('tasks');
// console.log(storage);

let arrToJson = JSON.stringify(storage);
console.log(arrToJson);
