'use strict';

function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

ask('Do you agree?',
  function () {
    alert('You agreed.');
  },
  function () {
    alert('You canceled the execution.');
  }
);

let age = prompt('What is your age?', 18);
let welcome;

if (age < 180) {
  welcome = function () {
    alert('Hello!');
  };
} else {
  welcome = function () {
    alert('Freeting!');
  };
}

welcome();
