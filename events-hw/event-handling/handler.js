'use strict';

const button = document.querySelector('.myButton');

  button.addEventListener('click', function () {
    alert('Button clicked!');
  });

  button.addEventListener('mouseover', function () {
    document.body.style.backgroundColor = 'lightblue';
  });

  button.addEventListener('mouseout', function () {
    document.body.style.backgroundColor = 'black';
  });
