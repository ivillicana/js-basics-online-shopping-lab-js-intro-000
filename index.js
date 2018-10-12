var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {

  var itemName = name;
  var price = Math.floor(Math.random()*100);
  var items = new Object({itemName: name, itemPrice: price});
  cart.push(items);
  return `${itemName} has been added to your cart.`;
}

function viewCart() {
  let i = 1;
  while(getCart().length > 0){
  return `In your cart, you have ${getCart().first} at $${getCart().second}, pancake batter at $5, and eggs at $49.`;
  }
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
*/
