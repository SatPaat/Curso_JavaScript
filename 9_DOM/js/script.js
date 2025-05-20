// 1 - movendo pelo dom
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - Selecionando por Tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - Selecionando por Id
const title = document.getElementById("title");

console.log(title);

// 4 - Selecionando por classes
const product = document.getElementsByClassName("product");

console.log(product);

// 5 - Query Selector
const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// 6 - InsertBefore
const p = document.createElement("p")

const header = title.parentElement

header.insertBefore(p, title);

// 7 - appendChild
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li);

// 8 - replaceChild
const h2 = document.createElement("h2")

h2.textContent = "Meu novo título"

header.replaceChild(h2, title)





