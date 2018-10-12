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

