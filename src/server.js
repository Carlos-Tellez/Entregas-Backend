import express from "express";
import ProductManager from "./components/ProductManager.js";

const app = express();
app.use(express.urlencoded({extended : true }));

const Productos = new ProductManager()
const rproducts = Productos.readProducts()

app.get("/products", async (req,res) => {

    let limit = parseInt(req.query.limit);

    if(!limit){
        return res.send(await rproducts)
    }

    let allp = await rproducts
    let plimit = allp.slice(0,limit)
    res.send(plimit)

});

app.get("/products/:id", async (req,res) =>{

    let id = parseInt (req.params.id)
    let allp = await rproducts
    let pById = allp.find(Products => Products.id === id)
    res.send(pById) 

});

const Port = 8080;
const server = app.listen(Port, () => {
    console.log(`Express por Local Host ${server.address().port}`)
})
server.on("error",(error) => console.log (`Error del servidor ${error}`) )