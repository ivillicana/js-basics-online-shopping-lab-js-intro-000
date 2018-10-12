var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemNames) {

 var itemPrice = Math.floor(Math.random()*100);
 var items = new Object({itemName: itemNames, itemPrice: price});
 cart.push(items);
 return `${itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
