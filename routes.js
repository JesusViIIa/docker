const express = require('express')
const router = express.Router()

const Product = require('./model/Product')


router.get('/', async(req, res)=>{

    try {
        const products = await Product.find()
        res.json(products);
    } catch (error) {
        res.status(500).json(error)
    }


})


router.post('/',async(req, res) =>{
try {
    const body = req.body
    console.log(body)
    const product = await Product.create(body)
    res.json(product)
} catch (error) {
    res.status(500).json(error)

 console.log(error)
}


})

router.put('/:id',async(req, res) =>{

    try {
        const body = req.body
        const productToUpdate = await Product.findByIdAndUpdate(req.params.id,body)
        if(!productToUpdate) return res.status(404).send('error')
        res.json(productToUpdate)
    } catch (error) {
        res.status(500).json(error)
    }
})


router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).send('ok')
    } catch (error) {
        res.status(500).json(error)
    }

});
module.exports = router