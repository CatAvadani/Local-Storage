window.addEventListener("DOMContentLoaded", main);

let cart = [];

function main() {
  // load the cart products from the Local Storage
  loadCartFromLS();
  renderProducts();
  renderCartCountBadge();
}

function renderProducts() {
  // adding the element in html
  const main = document.querySelector("#product-container");

  for (const product of products) {
    const card = createProductCard(product);
    main.append(card);
  }
}

function createProductCard(product) {
  // create card container
  const card = document.createElement("div");
  card.className = "product-card";
  // create card  title
  const titleH2 = document.createElement("h2");
  titleH2.textContent = product.title;
  titleH2.className = "card-title";

  //create card price
  const priceLabel = document.createElement("p");
  priceLabel.classList.add("card-price");
  priceLabel.textContent = product.price + " kr";

  // create a button -- this is the function we need to save it to the local storage
  const addToCartButton = document.createElement("button");
  addToCartButton.className = "card-add-button";
  addToCartButton.textContent = "Buy";
  addToCartButton.onclick = function () {
    cart.push(product);

    // save to the Local Storage
    saveCardToLS();
    renderCardCountBadge();
  };

  card.append(titleH2);
  card.append(priceLabel);
  card.append(addToCartButton);

  // return the card we created
  return card;
}

// create function to save the cart to the Local Storage
function saveCardToLS() {
  const cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
}

function loadCartFromLS() {
  const cartString = localStorage.getItem("cart");
  cart = JSON.parse(cartString);
}

function renderCartCountBadge() {
  const span = document.getElementById("cart-count");
  span.textContent = cart.length;
}
