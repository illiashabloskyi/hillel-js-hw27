const products = {
  electronics: [
    { name: "Smartphone", price: 500 },
    { name: "Laptop", price: 1000 },
  ],
  clothing: [
    { name: "T-shirt", price: 20 },
    { name: "Jeans", price: 50 },
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
    productElement.textContent = `${product.name} - $${product.price}`;
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
    <p>Price: $${product.price}</p>
    <button onclick="buyProduct('${product.name}')">Buy</button>
  `;
  productInfoContainer.appendChild(productInfo);
}

function buyProduct(productName) {
  alert(`You have successfully purchased ${productName}!`);
  showCategories();
}
