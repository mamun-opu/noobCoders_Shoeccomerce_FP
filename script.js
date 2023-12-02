// Array of image paths
const imagePaths = [
    "./img/featured/card-image1.jpg",
    "./img/featured/card-image2.jpg",
    "./img/featured/card-image3.jpg",
    "./img/featured/card-image5.jpg"
  ];
  
  // Function to create and append cards
  function createCard(imagePath, price) {
    const cardContainer = document.getElementById("cardContainer");
  
    // Create elements
    const colDiv = document.createElement("div");
    colDiv.classList.add("col");
  
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
    cardTitle.textContent = "Card title";
  
    const cardPrice = document.createElement("p");
    cardPrice.classList.add("card-text");
    cardPrice.textContent = price;
  
    // Append elements
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardPrice);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);
    colDiv.appendChild(cardDiv);
    cardContainer.appendChild(colDiv);
  }
  
  // Loop through image paths and create cards
  for (let i = 0; i < imagePaths.length; i++) {
    // Example prices - replace with actual data if available
    const prices = ["$999", "$999", "$999", "$99"];
    createCard(imagePaths[i], prices[i]);
  }
  