// Render de la vista de categories

import { categoriaActiva } from "../../main";
import { handleGetProductsLocalStorage } from "../persistence/localStorage.js";
import { handleRenderList } from "../views/store";

const handleFilterProductsByCategory = (categoryIn) => {
    const products = handleGetProductsLocalStorage()

    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products)
            break;
        case "Todo":
            handleRenderList(products)
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((e) => e.categoria === categoryIn)
            handleRenderList(result)
        default:
            break;
        case "MayorPrecio":
            const resultPrecioMayor = products.sort((a, b) => b.precio - a.precio)
            handleRenderList(resultPrecioMayor)
            break
        case "MenorPrecio":
            const resultPrecioMenor = products.sort((a, b) => a.precio - b.precio)
            handleRenderList(resultPrecioMenor)
            break
    }
}



export const renderCategories = () => {
    //elementos de la lista
    const ulList = document.getElementById("listFilter");
    //creamos elementos dentro de la lista
    ulList.innerHTML = `
        <li id="Todo">Todos los productos<li/>
        <li id="Hamburguesas">Hamburguesas<li/>
        <li id="Papas">Papas<li/>
        <li id="Gaseosas">Gaseosas<li/>
        <li id="MayorPrecio">Mayor precio<li/>
        <li id="MenorPrecio">Menor precio<li/>
    `;

    const liElements = ulList.querySelectorAll("li");

    liElements.forEach((liElement) => {
        liElement.addEventListener("click", () => {
            handleClick(liElement);
        })
    })
    //verificar y manejar estilos
    const handleClick = (element) => {
        console.log("HOLAA CLICK");

        handleFilterProductsByCategory(element.id)
        liElements.forEach((e) => {
            if (e.classList.contains("liActive")) {
                e.classList.remove("liActive")
            } else {
                if (element === e) {
                    e.classList.add("liActive")
                }
            }

        })
    }
};
