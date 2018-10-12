var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  
 var itemPrice = Math.floor(Math.random()*Math.floor(100));
 var items = new Object({name: itemName, price: itemPrice});

 function addingItems (items, name){
   items[name] = itemName;
   cart.push();
   return items;
  }
 return `${itemName} has been added to your cart`;
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
