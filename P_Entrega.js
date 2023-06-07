class Usuarios{

    constructor(nom,apell){
        this.nombre = nom,s
        this.apellido = apell,
        this.libros = [],
        this.mascotas = []
    }

    getFullName(){

        let NomCompleto = `Mi nombre es: ${this.nombre} ${this.apellido}`
        return NomCompleto
    }

    addMascota(mascota){

        this.mascotas.push(mascota)
    }

    countMascotas(){

        let numMasct = this.mascotas.length
        return numMasct
    }

    addBook(titulo,autor){
        let libro = {
            titulo: titulo,
            autor: autor
        }
        this.libros.push(libro)
    }

    getBookNames(){
        return this.libros.map(libros => libros.titulo)
    }



}

const p1 = new  Usuarios("Carlos","Tellez")
p1.addMascota("Gato")
p1.addMascota("Perro")
p1.addBook("Cronicas de una Muerte Anunciada", "Gabriel Garcia Marquez")
p1.addBook("El Alquimista", "Paulo Coelho")
console.log(p1.getFullName())
console.log(p1.countMascotas())
console.log(p1.getBookNames())

const p2 = new  Usuarios("Santiago ","Torres")
p2.addMascota("Gato")
p2.addMascota("Gato")
p2.addMascota("Pez")
p2.addBook("100 años de soledad", "Gabriel Garcia Marquez")
p2.addBook("Salon 8", "Yokoy Kenji")
p2.addBook("Once Minutos", "Paulo Coelho")
console.log(p2.getFullName())
console.log(p2.countMascotas())
console.log(p2.getBookNames())
