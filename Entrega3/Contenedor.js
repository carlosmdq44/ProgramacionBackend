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
            return JSON.parse(data);
        } catch {
            console.log("Archivo vacio");
            return [];
        }
    };
}
const archi1 = new Archivo('productos.txt');

module.exports = Contenedor;
