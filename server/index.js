import express from "express"

const app = express()

app.use(express.json())

app.post('/produits', (req, res) => {
    /*const {title, price, stock} = req.body
    productService.addProduct(title, price, stock)
    res.json({message: "produit ajouté"})*/
})

app.get('/produits/:id', (req, res) => {
    /*const product = productService.getProductById(req.params.id)
    if(product != undefined) {
        res.json(product)
    }
    else {
        res.json({message: "aucun produit avec cet id"})
    }*/
})

app.listen(666,() => {
    console.log("server open at 666")
})