const router = require('express').Router()

const ProdutctController = require('../controllers/products')

router.get('/products/:id?', ProdutctController.get) //? means optional on express

router.post('/products', ProdutctController.post)

router.put('/products/:id', ProdutctController.put)

// router.delete('/products/:id', ProdutctController.delete)

module.exports = router