'use strict';

// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('You can`t go!');
  }
}

// Will the function work differently if else is removed ?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('You can`t go!');
}

// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
// 	Using OR ||

function checkAge(age) {
  return (age > 18) ? true : confirm('You can`t go!');
}

function checkAge(age) {
  return (age > 18) || confirm('You can`t go!');
}

// Write a function min(a, b) which returns the least of two numbers a and b.

// For instance:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function min(a, b) {
  return a < b ? a : b;
}

// Write a function pow(x, n) that returns x in power n.Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9;
// pow(3, 3) = 3 * 3 * 3 = 27;
// pow(1, 100) = 1 * 1 * ...* 1 = 1;

function pow(x, n) {
  let result = x;
  for (let index = 1; index < n; index++) {
    result *= x;
  }
  return result;
}

let x = prompt('x?', '');
let n = prompt('n?', '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert(pow(x, n));
}
