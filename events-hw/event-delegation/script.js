'use strict';

const ul = document.querySelector('.myList')

// Simulate adding dynamic list items
const items = ['Item-1', 'Item-2', 'Item-3'];

items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
});

// Event delegation
ul.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    console.log('Clicked item:', event.target.textContent);
    handleItemClick(event.target.textContent);
  }
});

// Function to handle item click
function handleItemClick(itemText) {
  alert(`You clicked on: ${itemText}`);
}
