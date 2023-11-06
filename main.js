window.addEventListener("DOMContentLoaded", main);

let cart = [];
/**
 * This is the start of the program
 */

function main() {
  // load the cart products from the Local Storage
  loadCartFromLS();
  renderProducts();
  renderCartCountBadge();
}
/**
 * Generates html elements from our data file of products
 * and renders them to the screen
 */
function renderProducts() {
  // adding the element in html
  const main = document.querySelector("#product-container");

  for (const product of products) {
    const card = createProductCard(product);
    main.append(card);
  }
}
/**
 * Takes a product object and creates all needed html elements
 * and stylig and then returns it.
 * @param {Product} product the product object to turn into html
 * content.
 * @returns  an html representation of the product object
 */

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
    renderCartCountBadge();
  };

  card.append(titleH2);
  card.append(priceLabel);
  card.append(addToCartButton);

  // return the card we created
  return card;
}

// create function to save the cart to the Local Storage
/**
 * Saves the global cart array to local storage
 */
function saveCardToLS() {
  const cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
}
/**
 * Loads the cart from local storage and
 * saves it to the global cart array
 */
function loadCartFromLS() {
  // if (!localStorage.key("cart")) return;
  if (localStorage.key("cart")) {
    const cartString = localStorage.getItem("cart");
    cart = JSON.parse(cartString);
  }
}

/**
 * Uppdates the cart count badge in the header
 * and display how many products are in the cart
 */

function renderCartCountBadge() {
  const span = document.getElementById("cart-count");
  span.textContent = cart.length;
}
