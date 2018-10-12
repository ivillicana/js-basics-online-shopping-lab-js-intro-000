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
  getCart().push(items);
  return `${itemName} has been added to your cart.`;
}

function viewCart() {

  if (getCart().length === 0){
    return `Your shopping cart is empty.`;
  }
  
  else if (getCart().length === 1){
    return `In your cart, you have ${getCart().itemName} at $${getCart().itemPrice}, pancake batter at $5, and eggs at $49.`;
  }

  else if (getCart().length > 1){
    return `In your cart, you have ${getCart()[i].first} at $${getCart().second}, pancake batter at $5, and eggs at $49.`;
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
