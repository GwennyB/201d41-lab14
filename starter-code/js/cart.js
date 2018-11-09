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
  var tableEl = document.getElementById('cart');
  while (tableEl.firstChild) {
    tableEl.removeChild(tableEl.firstChild);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: DONE - Find the table body
  var tableEl = document.getElementById('cart');

  // TODO: DONE - Iterate over the items in the cart
  for (var item in cart) {
    // TODO: DONE - Create a TR
    var trEl = document.createElement('tr');
    trEl.id = cart[item][0];
    // TODO: Create a TD for the delete link, quantity,  and the item
    var tdEl = document.createElement('td')
    tdEl.textContent = 'delete';
    tdEl.id = 'del' + cart[item][0];
    tdEl.addEventListener('click', removeItemFromCart);
    trEl.appendChild(tdEl);
    trEl.appendChild(document.createElement('td').textContent = cart[item][1]);
    trEl.appendChild(document.createElement('td').textContent = cart[item][0]);
  }
  // TODO: DONE - Add the TR to the TBODY and each of the TD's to the TR
  tableEl.appendChild(trEl);
}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
