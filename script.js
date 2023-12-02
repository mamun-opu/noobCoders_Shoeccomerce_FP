const featuredData = [
  {
    imagePath: "./img/featured/card-image1.jpg",
    title: "Featured Item 1",
    price: "$999",
  },
  {
    imagePath: "./img/featured/card-image2.jpg",
    title: "Featured Item 2",
    price: "$1299",
  },
  {
    imagePath: "./img/featured/card-image3.jpg",
    title: "Featured Item 1",
    price: "$999",
  },
  {
    imagePath: "./img/featured/card-image4.jpg",
    title: "Featured Item 2",
    price: "$1299",
  },
  // Add more featured item data as needed
];

const latestData = [
  {
    imagePath: "./img/latest/card-image1.jpg",
    title: "Latest Product 1",
    price: "$49",
  },
  {
    imagePath: "./img/latest/card-image2.jpg",
    title: "Latest Product 2",
    price: "$79",
  },
  {
    imagePath: "./img/latest/card-image3.jpg",
    title: "Latest Product 1",
    price: "$49",
  },
  {
    imagePath: "./img/latest/card-image4.jpg",
    title: "Latest Product 2",
    price: "$79",
  },
  // Add more latest product data as needed
];

function createCard(imagePath, title, price) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("col");

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "h-100");

  const img = document.createElement("img");
  img.src = imagePath;
  img.classList.add("card-img-top");
  img.alt = "Card image";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = title;

  const cardPrice = document.createElement("p");
  cardPrice.classList.add("card-text");
  cardPrice.textContent = price;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardPrice);
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBody);
  cardContainer.appendChild(cardDiv);

  return cardContainer;
}

function populateCards(data, containerId) {
  const cardContainer = document.getElementById(containerId);

  data.forEach((item) => {
    const { imagePath, title, price } = item;
    const card = createCard(imagePath, title, price);
    cardContainer.appendChild(card);
  });
}

populateCards(featuredData, "featuredItems");
populateCards(latestData, "latestProducts");
