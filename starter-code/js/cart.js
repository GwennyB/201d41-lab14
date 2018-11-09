/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: DONE - Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tableEl = document.getElementById('cart').childNodes[3];
  while (tableEl.firstChild) {
    tableEl.removeChild(tableEl.firstChild);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: DONE - Find the table body
  var tableEl = document.getElementById('cart').childNodes[3];

  // TODO: DONE - Iterate over the items in the cart
  for (var count = 0; count<cart.items.length; count++) {
    // TODO: DONE - Create a TR
    var trEl = document.createElement('tr');
    trEl.id = cart.items[count][0];
    // TODO: Create a TD for the delete link, quantity,  and the item
    var tdEl = document.createElement('td');
    tdEl.textContent = 'X';
    tdEl.addEventListener('click', removeItemFromCart);
    trEl.appendChild(tdEl);
    var qtyEl = document.createElement('td');
    var prodEl = document.createElement('td');
    qtyEl.textContent = cart.items[count][1];
    prodEl.textContent = cart.items[count][0];
    trEl.appendChild(qtyEl);
    trEl.appendChild(prodEl);
    tableEl.appendChild(trEl);
  }
  // TODO: DONE - Add the TR to the TBODY and each of the TD's to the TR
}

function removeItemFromCart(event) {
  event.preventDefault();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  console.log('inside removeItemFromCart');
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
