// import data
import {menProductsData, womenProductsData, featuredItemsData, latestProductsData} from '../resources/data.js';

// generate card
function createCard(item, addToCartHandler) {
  const { image, name, price } = item;
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("col");

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "h-100", "position-relative");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("position-relative");

  const img = document.createElement("img");
  img.src = image;
  img.classList.add("card-img-top");
  img.alt = "Card image";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "p-3");

  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = name;

  const cardPrice = document.createElement("p");
  cardPrice.classList.add("card-text");
  cardPrice.textContent = `$${price}`;

  const addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.classList.add("btn", "btn-primary", "add-to-cart", "position-absolute", "top-50", "start-50", "translate-middle", "d-none");

  imgContainer.appendChild(img);
  imgContainer.appendChild(addToCartBtn);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardPrice);
  cardDiv.appendChild(imgContainer);
  cardDiv.appendChild(cardBody);
  cardContainer.appendChild(cardDiv);

  cardDiv.addEventListener("mouseenter", () => {
    addToCartBtn.classList.replace("d-none", "d-block");
    img.style.filter = "blur(1px)";
  });

  cardDiv.addEventListener("mouseleave", () => {
    addToCartBtn.classList.replace("d-block", "d-none");
    img.style.filter = "none";
  });

  addToCartBtn.addEventListener("click", () => {
    addToCartHandler(item);
    addToCartBtn.textContent = "Added";
  });

  return cardContainer;
}

function populateCards(data, containerId, addToCartHandler) {
  const cardContainer = document.getElementById(containerId);
  data.forEach((item) => {
    const card = createCard(item, addToCartHandler);
    cardContainer.appendChild(card);
  });
}

function addToCart(product) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const { name } = product;
  
  

  cartItems.push(name);
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

function loadProductsAndCards() {
  populateCards(menProductsData, "menProducts", addToCart);
  populateCards(womenProductsData, "womenProductsList", addToCart);
  populateCards(featuredItemsData, "featureProductsList", addToCart);
  populateCards(latestProductsData, "latestProductsList", addToCart);
}

// login usename
document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username');
  const loginLink = document.querySelector('.logincontent');

  if (username) {
    loginLink.innerHTML = `<a class="nav-link" href="../Login/logout.html">Logout, ${username}</a>`;
  }

  loadProductsAndCards();
});

document.addEventListener('DOMContentLoaded', function () {
  const username = localStorage.getItem('username');
  const loginLink = document.querySelector('.logincontent');

  if (username) {
      // If username is present, replace login link with welcome message
      loginLink.innerHTML = `<a class="nav-link" href="../Login/logout.html">Logout, ${username}</a>`;
  }
});
