import express from "express"
import data from "./data/user.json"

const app = express()

app.use(express.json())

app.post('/produits', (req, res) => {
    /*const {title, price, stock} = req.body
    productService.addProduct(title, price, stock)
    res.json({message: "produit ajouté"})*/
})

app.get('/users', (req, res) => {
    data.map((e,i)=>{
        res.json({message: "user found"})
    })
    res.json({message: "none user found"})
})

app.listen(666,() => {
    console.log("server open at 666")
})