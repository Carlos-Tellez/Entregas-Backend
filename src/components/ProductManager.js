
import {promises as fs} from "fs"


export default class ProductManager {

    constructor(){
        this.patch = "./Productos.JSON"
        this.products = []
    }

    static id = 0

    addProduct = async (title,description,price,img,code,stock) => {

        ProductManager.id++

        let newProduct = {
            id: ProductManager.id,
            title,
            description,
            price,
            img,
            code,
            stock
        }

        this.products.push(newProduct)

        await fs.writeFile(this.patch,JSON.stringify(this.products))

    }

    readProducts = async () => {

        let get = await fs.readFile(this.patch, "utf-8")
        return JSON.parse(get)

    }

    getProducts = async () => {

        let get2 = await this.readProducts()
        return console.log(get2) 
    }

    getProductById = async (id) => {

        let get3 = await this.readProducts()
        if(!get3.find(product => product.id === id)){

            console.log(" El Producto No Se a Encontrado")

        } else {

            console.log(get3.find(product => product.id === id))

        }


    }

    updateProduct = async ({id, ...producto}) => {

        await this.deleteProduct(id)
        let PoductOld = await this.readProducts()
        let Actualizados = [ ...PoductOld,{id, ...producto}]
        await fs.writeFile(this.patch,JSON.stringify(Actualizados))
    }

    deleteProduct = async (id) => {

        let get3 = await this.readProducts(id)
        let pFilter = get3.filter(products => products.id != id)
        await fs.writeFile(this.patch,JSON.stringify(pFilter))

        console.log("Producto Eliminado")

    }

}

//const Productos = new ProductManager

/*Productos.addProduct("Producto 1","Descripcion",100000,"Sin Imagen","ABC123",10);
Productos.addProduct("Producto 2","Descripcion",200000,"Sin Imagen","ABC123",15);
Productos.addProduct("Producto 3","Descripcion",300000,"Sin Imagen","ABC123",12);
Productos.addProduct("Producto 4","Descripcion",200000,"Sin Imagen","ABC123",10);
Productos.addProduct("Producto 5","Descripcion",100000,"Sin Imagen","ABC123",13);
Productos.addProduct("Producto 6","Descripcion",300000,"Sin Imagen","ABC123",10);
Productos.addProduct("Producto 7","Descripcion",100000,"Sin Imagen","ABC123",18);
Productos.addProduct("Producto 8","Descripcion",300000,"Sin Imagen","ABC123",10);
Productos.addProduct("Producto 9","Descripcion",200000,"Sin Imagen","ABC123",12);
Productos.addProduct("Producto 10","Descripcion",300000,"Sin Imagen","ABC123",17);
Productos.addProduct("Producto 11","Descripcion",200000,"Sin Imagen","ABC123",12);
Productos.addProduct("Producto 12","Descripcion",100000,"Sin Imagen","ABC123",16);*/


//Productos.getProducts()
//Productos.getProductById(3)
//Productos.deleteProduct(2)
/*Productos.updateProduct(
    {
        id: 2,
        title: 'Album Pannini',
        description: 'Albun de laminas marca pannini',
        price: 20000,
        img: 'Sin Imagen',
        code: 'Ap2043',
        stock: 8
    }
)*/