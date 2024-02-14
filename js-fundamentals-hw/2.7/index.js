'use strict';

let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

console.log('6' / '2');

let string = '123';
console.log(typeof string);

let number = Number(string);
console.log(typeof number);

let age = Number('arbitrary string instead of a number');
console.log(age);

alert(Number('  123  '));
alert(Number('123 34 7'));
