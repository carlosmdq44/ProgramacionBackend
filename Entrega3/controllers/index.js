
const obtenerProductos =  async () => {
        const productos = await contenido.getAll();
        res.json(productos);    
}

const obtenerProductosRandom = () => {return "productos"}


module.exports = {obtenerProductos,obtenerProductosRandom};