
import { productoActivo } from "../../main.js";
import { handleGetProductsLocalStorage, setInLocalStorage } from "../persistence/localStorage.js";
import { closeModal } from "../views/modal.js";
import { handleGetProductsToStore, handleRenderList } from "../views/store.js";
import Swal from 'sweetalert2'
const acceptBtn = document.getElementById("acceptBtn");
acceptBtn.addEventListener("click", () => {
    handleSaveOrModify();
});

const buttonCancel = document.getElementById("cancelBtn");
buttonCancel.addEventListener("click", () => {
    closeModal();
});

const handleSaveOrModify = () => {
    const nombre = document.getElementById("nombre").value;
    const img = document.getElementById("img").value;
    const precio = document.getElementById("precio").value;
    const categoria = document.getElementById("categoria").value;
    let obj = null;

    if (productoActivo) {
        obj = {
            ...productoActivo,
            nombre,
            img,
            precio,
            categoria
        };
    } else {
        obj = {
            id: new Date().toISOString(),
            nombre,
            img,
            precio,
            categoria
        };
    }

    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado!",
        icon: "success"
    })

    setInLocalStorage(obj);
    handleGetProductsToStore();
    closeModal();
};

export const handleDeleteProduct = () => {

    const products = handleGetProductsLocalStorage();
    console.log("Productos antes del filtrado:", products);

    const filteredProducts = products.filter((el) => el.id !== productoActivo.id);
    console.log("Productos después del filtrado:", filteredProducts);

    localStorage.setItem("products", JSON.stringify(filteredProducts));

    const newProducts = handleGetProductsLocalStorage();
    Swal.fire({
        title: "Eliminado!",
        text: "Producto eliminado!",
        icon: "success"
    })
    handleRenderList(newProducts);
    closeModal();
};


// Eventos



