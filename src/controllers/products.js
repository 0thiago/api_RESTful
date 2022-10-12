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

async function post(req, res) {
  const {
    name,
    brand,
    price,
  } = req.body

  const product = new ProductsModel({
    name,
    brand,
    price,
  })

  product.save()

  res.send({
    message: 'success'
  })
}

async function put(req, res) {
  const { id } = req.params

  const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true }) //id, updated data, if you want return the item updated

  res.send({
    message: 'success',
    product,
  })

  /* === Method updateOne (doesnt return the updated item)
    const product = await ProductsModel.findOne({ _id: id })
  
    await product.updateOne(req.body)
  
    res.send({
      message: 'success',
      product,
    }) */
}

async function remove(req, res) {
  const { id } = req.params

  const remove = await ProductsModel.deleteOne({ _id: id })

  const message = remove.deletedCount ? 'success' : 'error'

  res.send({
    message,
  })
}

module.exports = {
  get,
  post,
  put,
  remove,
}