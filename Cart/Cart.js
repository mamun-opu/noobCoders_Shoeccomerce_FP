let cart = [
  {
    id: 'x2z1r8f9',
    image: "../img/men/card-image1.jpg",
    name: "SwiftStep Sneakers",
    price: "65",
    quantity: 1,
  },
  {
    id: 'g5s7h3a6',
    image: "../img/men/card-image2.jpg",
    name: "VentureWalk Boots 2",
    price: "99",
    quantity: 1,
  },
];

export function getCart() {
  return cart;
}

export function updateCart(newItem) {
  cart.push(newItem);
}

function displayCart() {
  const cartItems = document.getElementById('cart-items');
  let cartHtml = '';
  let totalAmount = 0;

  cart.forEach(item => {
    totalAmount += item.price * item.quantity;
    cartHtml += `
      <div class="row mb-3">
        <div class="col">${item.name}</div>
        <div class="col">
          <button class="decrease" data-item-id="${item.id}">-</button>
          ${item.quantity}
          <button class="increase" data-item-id="${item.id}">+</button>
        </div>
        <div class="col">$${item.price}</div>
        <div class="col">
          <button class="delete btn btn-danger" data-item-id="${item.id}">Delete</button>
        </div>
      </div>
    `;
  });

  const tax = totalAmount * 0.15;
  const totalPayment = totalAmount + tax;

  cartHtml += `
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"><strong>Total:</strong></div>
      <div class="col">$${totalAmount.toFixed(2)}</div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"><strong>Tax (15%):</strong></div>
      <div class="col">$${tax.toFixed(2)}</div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"><strong>Total Payment:</strong></div>
      <div class="col">$${totalPayment.toFixed(2)}</div>
    </div>
  `;

  cartItems.innerHTML = cartHtml;

  // Add event listener for cart items
  cartItems.addEventListener('click', function(event) {
    const target = event.target;
    if (target.matches('button.increase')) {
      const itemId = target.dataset.itemId;
      increaseQuantity(itemId);
    }
    if (target.matches('button.decrease')) {
      const itemId = target.dataset.itemId;
      decreaseQuantity(itemId);
    }
    if (target.matches('button.delete')) {
      const itemId = target.dataset.itemId;
      deleteItem(itemId);
    }
  });
}

function increaseQuantity(itemId) {
  const item = cart.find(item => item.id === itemId);
  if (item) {
    item.quantity++;
    displayCart();
  }
}

function decreaseQuantity(itemId) {
  const item = cart.find(item => item.id === itemId);
  if (item && item.quantity > 1) {
    item.quantity--;
    displayCart();
  }
}

function deleteItem(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  displayCart();
}

// Display initial cart
displayCart();
