'use strict';

// custome events
const itemAddedEvent = new CustomEvent('itemAdded', { detail: { price: 10.99 } });
const priceUpdatedEvent = new CustomEvent('priceUpdated');

// handle item added event
function handleItemAdded(event) {
  const item = document.createElement('li');
  item.textContent = `Item ${document.querySelectorAll('.cartItems li').length + 1}`;
  document.querySelector('.cartItems').appendChild(item);

  // price updated event after adding item
  document.dispatchEvent(priceUpdatedEvent);
}

// handle price updated event
function handlePriceUpdated(event) {
  const totalPrice = document.querySelectorAll('.cartItems li').length * 10.99;
  document.querySelector('.totalPrice').textContent = `${totalPrice.toFixed(2)} hryvnas`;
}

document.addEventListener('itemAdded', handleItemAdded);
document.addEventListener('priceUpdated', handlePriceUpdated);

// button to add item to cart
document.querySelector('.addItemBtn').addEventListener('click', function () {
  document.dispatchEvent(itemAddedEvent);
});

/* 
  Using custom events in a shopping cart scenario improves modularity,
    decouples components, promotes scalability, 
    and enhances readability and maintainability. 
*/
