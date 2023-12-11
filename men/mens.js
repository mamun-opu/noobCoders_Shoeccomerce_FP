document.addEventListener("DOMContentLoaded", function () {
  const username = localStorage.getItem("username");
  const loginLink = document.querySelector(".logincontent");

  if (username) {
    // If username is present, replace login link with welcome message
    loginLink.innerHTML = `<a class="nav-link" href="../Login/logout.html">Logout, ${username}</a>`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");
  const searchBar = document.getElementById("searchBar");
  const outputText = document.getElementById("outputText");
  let recognition;

  if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
    recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();

    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      startButton.innerHTML = "<span>&#x1F3A4;</span> Stop Recording";
      startButton.classList.add("recording");
      stopButton.disabled = false;
    };

    recognition.onresult = (event) => {
      const result = event.results[event.results.length - 1][0].transcript;
      outputText.textContent = `You said: ${result}`;
      searchBar.value = result;
    };

    recognition.onend = () => {
      startButton.innerHTML = "<span>&#x1F3A4;</span> Start Recording";
      startButton.classList.remove("recording");
      stopButton.disabled = true;
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      startButton.innerHTML = "<span>&#x1F3A4;</span> Start Recording";
      startButton.classList.remove("recording");
      stopButton.disabled = true;
    };

    startButton.addEventListener("click", () => {
      recognition.start();
    });

    stopButton.addEventListener("click", () => {
      recognition.stop();
    });
  } else {
    outputText.textContent =
      "Speech recognition is not supported in this browser.";
    startButton.disabled = true;
    stopButton.disabled = true;
    searchBar.disabled = true;
  }
});

fetch("https://dummyjson.com/products/category/mens-shoes")
  .then((response) => response.json())
  .then((data) => displayProducts(data.products))
  .catch((error) => console.error("Error fetching products:", error));

function addToCart(productTitle) {
  if (!localStorage.getItem("username")) {
    alert(`Login to add to the cart!`);
    return;
  }

  // Retrieve existing items from localStorage or initialize an empty array
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the product is already in the cart
  if (!cartItems.includes(productTitle) && localStorage) {
    // Add the product title to the cart

    cartItems.push(productTitle);
    // Update the localStorage with the new cartItems
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Optional: Provide feedback to the user (you can use alert, console.log, or any other method)
    alert(`${productTitle} added to the cart!`);
  } else {
    // Optional: Provide feedback that the product is already in the cart
    alert(`${productTitle} is already in the cart!`);
  }
}

function displayProducts(products) {
  console.log("pds", products);
  const productContainer = document.getElementById("productContainer");

  // Loop through each product and create a card
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card mb-4";
    card.innerHTML = `
      <div id="carousel${
        product.id
      }" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          ${product.images
            .map(
              (image, index) => `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
              <img src="${image}" class="d-block w-100" alt="${product.name}">
            </div>
          `
            )
            .join("")}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel${
          product.id
        }" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel${
          product.id
        }" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text fw-bold">${product.price}</p>
        <a href="#" class="btn btn-primary" onclick="addToCart('${
          product.title
        }')">Add to Cart</a>
      </div>
    `;
    productContainer.appendChild(card);
  });
}
