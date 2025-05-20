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



