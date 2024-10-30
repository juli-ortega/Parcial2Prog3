import { renderCategories } from "./src/services/categories.js";
import { openModal } from "./src/views/modal.js";
import { handleGetProductsToStore } from "./src/views/store.js";
import './style.css';
import './src/services/product.js';
import './src/services/categories.js';
import { handleSearchProductByName } from "./src/services/searchBar.js";
// APP

export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn
}


export let productoActivo = null;

export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn
}

handleGetProductsToStore();
renderCategories();
//HEADER

const buttonAddElement = document.getElementById("buttonAddElement");
buttonAddElement.addEventListener("click", () => {
    openModal();
});


//Search

const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", () => {
    handleSearchProductByName();
});

