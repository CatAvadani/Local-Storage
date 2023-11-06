window.addEventListener("DOMContentLoaded", main);

function main() {
  renderProducts();
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
  priceLabel.textContent = product.price;

  // create a button
  const addToCartButton = document.createElement("button");
  addToCartButton.className = "card-add-button";
  addToCartButton.textContent = "Buy";

  card.append(titleH2);
  card.append(priceLabel);
  card.append(addToCartButton);

  // return the card we created
  return card;
}
