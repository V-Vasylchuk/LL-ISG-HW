'use strict';

// What is the code below going to output?
alert(null || 2 || undefined); // 2

// What will the code below output ?
alert(alert(1) || 2 || alert(3)); // 1 2 

// What is this code going to show?
alert(1 && null && 2); // null

// What will this code show ?
alert(alert(1) && alert(2)); // 1 undefined

// What will the result be?
alert(null || 2 && 3 || 4); // 3

// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.
if (age >= 14 && age <= 90);

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
if (age < 14 || age > 90);

// Which of these alerts are going to execute ?
// What will the results of the expressions be inside if (...)?
if (-1 || 0) {
  alert('first');
}
if (-1 && 0) {
  alert('second');
}
if (null || -1 && 1) {
  alert('third'); // executes
}

// Write the code which asks for a login with prompt.
// If the visitor enters 'Admin', then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
// Please use nested if blocks.Mind the overall readability of the code.

let userName = prompt('Who`s there?', '');

if (userName === 'Admin') {

  let password = prompt('Password?', '');

  if (password === 'TheMaster') {
    alert('Welcome!');
  } else if (password === '' || password === null) {
    alert('Canceled');
  } else {
    alert('Wrong password');
  }

} else if (userName === '' || userName === null) {
  alert('Canceled');
} else {
  alert('I don`t know you');
}
