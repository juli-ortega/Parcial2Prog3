// src/persistence/localStorage.js
export const handleGetProductsLocalStorage = () => {
    const productos = JSON.parse(localStorage.getItem("products"));
    return productos ? productos : [];
};

export const setInLocalStorage = (productIn) => {
    // Traer productos almacenados
    let productsInLocal = handleGetProductsLocalStorage();

    // Buscar si el producto ya existe en el array
    const existingIndex = productsInLocal.findIndex((product) => product.id === productIn.id);

    // Verificar si existe
    if (existingIndex !== -1) {
        // Si existe, reemplazar
        productsInLocal[existingIndex] = productIn;
    } else {
        // Si no existe, agregar
        productsInLocal.push(productIn);
    }

    // Guardar en Local Storage
    localStorage.setItem("products", JSON.stringify(productsInLocal));
};
