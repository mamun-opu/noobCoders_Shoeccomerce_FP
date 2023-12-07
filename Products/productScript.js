import {menProductsData, womenProductsData, featuredItemsData, latestProductsData} from '../resources/data.js';
import { getCart, updateCart } from '../Cart/Cart.js';


function createCard(item) {
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

// add to card click listener -------
  addToCartBtn.addEventListener("click", () => {
    console.log(`Added to cart: ${name} - ${price}`);
    // if(updateCart()){
    //   updateCart(item);
    // }
    updateCart(item);
    
    
    addToCartBtn.textContent = "Added";
  });

  return cardContainer;
}




function populateCards(data, containerId) {
  const cardContainer = document.getElementById(containerId);
  data.forEach((item) => {
    const card = createCard(item);
    cardContainer.appendChild(card);
  });
}

populateCards(menProductsData, "menProducts");
populateCards(womenProductsData, "womenProductsList");
populateCards(featuredItemsData, "featureProductsList");
populateCards(latestProductsData, "latestProductsList");
