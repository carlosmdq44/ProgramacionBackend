const Producto = require("./producto");
const fs = require('fs')

class Contenedor {
    
    constructor(file){
        this.file = file;
        this.encode = 'utf-8';
    };
    
    async getAll(){
        try {
            let data = await this.fs.promises.readFile(`./${this.file}`, this.encode);
            return JSON.parse(data);
        } catch (error){
            console.log("Archivo vacio");
        }
    };
}

module.exports = Contenedor;
