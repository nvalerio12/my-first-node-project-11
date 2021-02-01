const myModule = require('./myModule')

const myOtherModule = require('./myOtherModule');

const myOtherOtherModule = require('./myOtherOtherModule')
console.log('Hello World')

function hello(name) {
    console.log(`Hello, ${name}`);
}

hello('Mocha');
hello('JC');

console.log(myModule.add(2, 3));
console.log(myModule.subtract(5, 4));

//my other module
myOtherModule.welcomeToNode();

console.log(myOtherOtherModule.divied(3, 21))