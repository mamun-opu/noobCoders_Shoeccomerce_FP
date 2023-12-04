let cart = []; // Your cart array

export function getCart() {
  return cart;
}

export function updateCart(newItem) {
  cart.push(newItem);
}
