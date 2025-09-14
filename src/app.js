//підключення імпортами 
import product from "./products.json"
import template from "./product-template.hbs";
const listElement = document.querySelector(".list");

listElement.innerHTML = template({ product });