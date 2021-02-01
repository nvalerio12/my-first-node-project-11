const fs = require('fs');
const { request } = require('http');
const moment = require('moment');

let myData = moment('2021-02-01');
let addOneWeek = myData.add (1, 'week');
console.log(myData.format())
fs.readFile('nfl.txt', 'utf8', function(error, data) {
    if (error) {
        console.log('You have a problem reading this file.')
    } else {
        console.log(data)
    }
    
})
















// const myModule = require('./myModule')

// const myOtherModule = require('./myOtherModule');

// const myOtherOtherModule = require('./myOtherOtherModule')
// console.log('Hello World')

// function hello(name) {
//     console.log(`Hello, ${name}`);
// }

// hello('Mocha');
// hello('JC');

// console.log(myModule.add(2, 3));
// console.log(myModule.subtract(5, 4));

// //my other module
// myOtherModule.welcomeToNode();

// console.log(myOtherOtherModule.divied(3, 21))