const menProductsData = [
  // Men's product data here
  {
    image: "./img/men/card-image1.jpg",
    name: "Featured Item 1",
    price: "$999",
  },
  {
    image: "./img/men/card-image2.jpg",
    name: "Featured Item 2",
    price: "$1299",
  },
  {
    image: "./img/men/card-image3.jpg",
    name: "Featured Item 1",
    price: "$999",
  },
  {
    image: "./img/men/card-image4.jpg",
    name: "Featured Item 2",
    price: "$1299",
  },
];

const womenProductsData = [
  // Women's product data here
  {
    image: "./img/women/card-image1.jpg",
    name: "Featured Item 1",
    price: "$999",
  },
  {
    image: "./img/women/card-image2.jpg",
    name: "Featured Item 2",
    price: "$1299",
  },
  {
    image: "./img/women/card-image3.jpg",
    name: "Featured Item 1",
    price: "$999",
  },
  {
    image: "./img/women/card-image4.jpg",
    name: "Featured Item 2",
    price: "$1299",
  },
];

const featuredItemsData = [
  // Featured items data here
  {
    image: "./img/featured/card-image1.jpg",
    name: "Featured Item 1",
    price: "$999",
  },
  {
    image: "./img/featured/card-image2.jpg",
    name: "Featured Item 2",
    price: "$1299",
  },
  {
    image: "./img/featured/card-image3.jpg",
    name: "Featured Item 1",
    price: "$999",
  },
  {
    image: "./img/featured/card-image4.jpg",
    name: "Featured Item 2",
    price: "$1299",
  },
];

const latestProductsData = [
  // Latest products data here
  {
    image: "./img/latest/card-image1.jpg",
    name: "Latest Product 1",
    price: "$49",
  },
  {
    image: "./img/latest/card-image2.jpg",
    name: "Latest Product 2",
    price: "$79",
  },
  {
    image: "./img/latest/card-image3.jpg",
    name: "Latest Product 1",
    price: "$49",
  },
  {
    image: "./img/latest/card-image4.jpg",
    name: "Latest Product 2",
    price: "$79",
  },
];

function createCard(imagePath, title, price) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("col");

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "h-100", "position-relative");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("position-relative");

  const img = document.createElement("img");
  img.src = imagePath;
  img.classList.add("card-img-top");
  img.alt = "Card image";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "p-3");

  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = title;

  const cardPrice = document.createElement("p");
  cardPrice.classList.add("card-text");
  cardPrice.textContent = price;

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
    console.log(`Added to cart: ${title} - ${price}`);
  });

  return cardContainer;
}

// Rest of your code remains unchanged...

// Rest of your code remains unchanged...


// Rest of your code remains unchanged...


// Rest of your cod



function populateCards(data, containerId) {
  const cardContainer = document.getElementById(containerId);

  data.forEach((item) => {
    const { image, name, price } = item;
    const card = createCard(image, name, price);
    cardContainer.appendChild(card);
  });
}

populateCards(menProductsData, "menProducts");
populateCards(womenProductsData, "womenProductsList");
populateCards(featuredItemsData, "featureProductsList");
populateCards(latestProductsData, "latestProductsList");
