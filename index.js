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
    return `In your cart, you have ${getCart()[0]} at $${getCart()[0]}.`;
  }
/*
  else if (getCart().length ===2){

    return `In your cart, you have ${getCart()[i].itemName} at ${getCart()[i].itemPrice}`;
  }

  else if (getCart().length > 1){
    let i = 0;
    let thisCart = [];
    while (i < getCart().length){
      thisCart.push(`${getCart()[i].itemName} at ${getCart()[i].itemPrice}, and`);
      i++;
    }
    return `In your cart, you have ${thisCart}.`;
    //`In your cart, you have ${getCart()[i].itemName} at ${getCart()[i].itemPrice}`;
  }*/
}
/*
item — In your cart, you have bananas at $17.
2 items — In your cart, you have bananas at $17, and pancake batter at $5.
3+ items — In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
*/

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
