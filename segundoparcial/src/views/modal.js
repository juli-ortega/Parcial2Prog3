//MODAL

import { productoActivo, setProductoActivo } from "../../main.js";
import { handleDeleteProduct } from "../services/product.js";

export const openModal = () => {
    const modalPop = document.getElementById("modalPopUP");
    modalPop.style.display = "flex";
    const btnDelete = document.getElementById("deleteBtn")

    if (productoActivo) {
        btnDelete.style.display = "block"

    } else {
        btnDelete.style.display = "none"

    }
    if (productoActivo) {
        const nombre = document.getElementById("nombre");
        const img = document.getElementById("img");
        const precio = document.getElementById("precio");
        const categoria = document.getElementById("categoria");

        nombre.value = productoActivo.nombre;
        img.value = productoActivo.img;
        precio.value = productoActivo.precio;
        categoria.value = productoActivo.categoria;
    }
};
//Cerrar modal
export const closeModal = () => {
    const modalPop = document.getElementById("modalPopUP");
    modalPop.style.display = "none";
    setProductoActivo(null);
    resetModal();
};
//Resetear modal
export const resetModal = () => {
    const nombre = document.getElementById("nombre");
    const img = document.getElementById("img");
    const precio = document.getElementById("precio");
    const categoria = document.getElementById("categoria");

    nombre.value = "";
    img.value = "";
    precio.value = 0;
    categoria.value = "Seleccione categoria";
};

const deleteButton = document.getElementById("deleteBtn")

deleteButton.addEventListener("click", () => {
    handleDeleteBtn();
    closeModal()
})

const handleDeleteBtn = () => {
    handleDeleteProduct();
};