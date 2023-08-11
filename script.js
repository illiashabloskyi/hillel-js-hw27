const products = {
  electronics: [
    { name: "Телефон", price: 500, info: "опис"},
    { name: "Ноутбук", price: 1000, info: "опис" },
  ],
  clothing: [
    { name: "Футболка", price: 20, info: "опис" },
    { name: "Джинси", price: 50, info: "опис" },
  ],
};

function showCategories() {
  const productsContainer = document.querySelector(".products");
  productsContainer.innerHTML = "";

  const productInfoContainer = document.querySelector(".product-info");
  productInfoContainer.style.display = "none";
}

function showCategory(category) {
  const productsContainer = document.querySelector(".products");
  productsContainer.innerHTML = "";

  products[category].forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.textContent = `${product.name} - ${product.price} грн.`;
    productElement.addEventListener("click", () => showProductInfo(product));
    productsContainer.appendChild(productElement);
  });

  const productInfoContainer = document.querySelector(".product-info");
  productInfoContainer.style.display = "none";
}

function showProductInfo(product) {
  const productInfoContainer = document.querySelector(".product-info");
  productInfoContainer.style.display = "block";
  productInfoContainer.innerHTML = "";

  const productInfo = document.createElement("div");
  productInfo.innerHTML = `
    <h2>${product.name}</h2>
    <p>Ціна: ${product.price}грн.</p>
    <p>Опис: ${product.info}</p>
    <button onclick="buyProduct('${product.name}')">Купити</button>
  `;
  productInfoContainer.appendChild(productInfo);
}

function buyProduct(productName) {
  alert(`Ви купили ${productName}!`);
  showCategories();
}
