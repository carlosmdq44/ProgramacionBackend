const Producto = require("../Contenedor");
const prod = new Producto("./productos.txt");

const obtenerProductos = async () => { return await prod.getAll();}

const obtenerProductosRandom = async () => {
	const productos = await prod.getAll();
	const random = Math.floor(Math.random() * productos.length);
    return await prod.getById(random);
};


module.exports = {obtenerProductos,obtenerProductosRandom};