class Usuario {
    constructor(nombre, apellido, mascotas, libros) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = mascotas;
        this.libros = libros;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({
            nombre: nombre,
            autor: autor
        });
    }

    getBooks() {
        let nombres = []
        for (let i = 0; i < this.libros.length; i++) {
            nombres.push(this.libros[i].nombre)
        }
        return nombres;
    }

}


let usuario = new Usuario('Elon','Musk', [], []);

usuario.addMascota('Perro 1 ');
usuario.addMascota('Perro 2');
usuario.addBook('El señor de las moscar', 'William Golding');
usuario.addBook('Fundacion', 'Isaac Asimov');

console.log(usuario.getFullName());
console.log(`La cantidad de mascotas es: ` + usuario.countMascotas());
console.log(usuario.getBooks());
console.log(usuario);