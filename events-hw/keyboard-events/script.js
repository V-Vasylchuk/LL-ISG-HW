'use strict';

const ENTER_KEY_CODE = 13;
const form = document.querySelector('.myForm');
const inputField = form.querySelector('.textInput');

inputField.addEventListener('keydown', function (event) {
  console.log('Key code:', event.keyCode);

  if (event.keyCode === ENTER_KEY_CODE) {
    event.preventDefault();

    const inputValue = inputField.value;
    alert('You entered: ' + inputValue);
  }
});

/*
  Handling other keyboard events like keyup and keypress
  We can add similar event listeners for other keyboard events

  For example:

  inputField.addEventListener('keyup', function(event) {
    console.log('Key released:', event.keyCode);
  });

  inputField.addEventListener('keypress', function(event) {
    console.log('Key pressed:', event.keyCode);
  });
*/
