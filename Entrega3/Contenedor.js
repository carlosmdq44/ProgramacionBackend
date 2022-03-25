const Producto = require("./producto");
const fs = require('fs');

class Contenedor {
    
    constructor(file){
        this.file = file;
        this.encode = 'utf-8';
    };
    
    async getAll(){
        try {
            let data =  fs.readFileSync(`./${this.file}`, this.encode);
            console.log(JSON.parse(data));
            return JSON.parse(data);
        } catch(error) {
            console.log("NO existe el archivo");
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
