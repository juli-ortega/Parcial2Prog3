import { handleGetProductsLocalStorage } from "../persistence/localStorage"
import { handleRenderList } from "../views/store";

export const handleSearchProductByName = () => {
    const inputHeader = document.getElementById("inputHeader");
    const products = handleGetProductsLocalStorage();
    const result = products.filter((e) => e.nombre.toLowerCase().includes(inputHeader.value));
    handleRenderList(result);
}