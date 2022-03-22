const Producto = require("./producto");

class Contenedor {
    
    fs = require('fs');

    constructor(file){
        this.file = file;
        this.encode = 'utf-8';
    };
    
    async getAll(){
        try {
            let data = await this.fs.promises.readFile(`./${this.file}`, this.encode);
            console.log(JSON.parse(data));
            return JSON.parse(data);
        } catch {
            console.log("Archivo vacio");
            return [];
        }
    };
    
    async getById(id) {
        try {
            const productos = await this.getAll();
            return productos.find(Producto => id === Producto.id);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Contenedor;
