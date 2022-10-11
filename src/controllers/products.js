const ProductsModel = require('../models/products')

async function get(req, res) {
  const { id } = req.params

  // I did:
  // let products
  // if (id) {
  //   products = await ProductsModel.find({ _id: id })
  // } else {
  //   products = await ProductsModel.find()
  // }

  // TERNARY IF
  const obj = id ? { _id: id } : null 

  const products = await ProductsModel.find(obj)

  res.send(products)
}

module.exports = {
  get,
}