window.addEventListener("DOMContentLoaded", main);

function main() {
  renderProducts();
}
function renderProducts() {
  // adding the element in html
  const main = document.querySelector("#product-container");
  for (const product of products) {
    // this creates the element in js
    const card = document.createElement("div");
    card.textContent = product.title;

    main.appendChild(card);
  }
}
