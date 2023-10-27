document.addEventListener("DOMContentLoaded", function () {
 const productsList = document.getElementById("productsList");
 
 const products = [
 { name: "Product 1", price: "$10", image: "img1.jpg" },
 { name: "Product 2", price: "$20", image: "img2.jpg" },
 { name: "Product 3", price: "$30", image: "img3.jpg" },
 ];
 
 products.forEach((product) => {
 const productElement = document.createElement("div");
 productElement.className = "product";
 
 const imageElement = document.createElement("img");
 imageElement.src = product.image;
 imageElement.alt = product.name;
 
 const nameElement = document.createElement("h3");
 nameElement.textContent = product.name;
 
 const priceElement = document.createElement("p");
 priceElement.textContent = product.price;
 
 productElement.appendChild(imageElement);
 productElement.appendChild(nameElement);
 productElement.appendChild(priceElement);
 
 productsList.appendChild(productElement);
 });
 
 const scrollToProductsLink = document.getElementById("scrollToProducts");
 const featuredProducts = document.getElementById("featuredProducts");
 
 scrollToProductsLink.addEventListener("click", function (event) {
 event.preventDefault();
 
 featuredProducts.scrollIntoView({ behavior: "smooth" });
 });
 });
