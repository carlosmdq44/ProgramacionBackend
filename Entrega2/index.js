const Producto = require("./producto");

class Archivo {
    
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
    
    async save(newProduct) {
        const data = await this.getAll();
        newProduct.id = data.lenght +1;
        data.push(newProduct);
        try {
            await this.fs.promises.writeFile(this.file, JSON.stringify(data, null, '\t'));
        } catch(err) {
            console.log('El archivo no se pudo guardar', err);
        }
    }

    async deleteAll() {
        try{
            await this.fs.promises.unlink(`./${this.file}`);
        } catch(err){
            console.log('No se pudo borrar el archivo', err);
        }
    }

    async deleteById(id){
        const fileContent = await this.getAll();
        let notDeleted = fileContent.filter(item => item.id !== id)
        await fs.writeFile(`./${this.file}`, JSON.stringify(notDeleted, null, 3))
    }

    async getById(id) {
        try {
            const productos = await this.getAll();
            return productos.find(Producto => id === Producto.id);
        } catch (error) {
            console.log(error);
        }
    }
}

const archi1 = new Archivo('productos.txt');
const newItem1 = new Producto('Lápiz', 223.12, 'url1');
const newItem2 = new Producto('Goma', 79.99, 'url2');

///archi1.save(newItem1);
///archi1.save(newItem2);
///archi1.deleteAll();
console.log(archi1.getById(1));
