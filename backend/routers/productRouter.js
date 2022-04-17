import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async (req, res) => {
  const keyword = req.query.keyword ? {
    name: {
      $regex:req.query.keyword,
      $options: 'i'
    },
  }
  : {};
  const products = await Product.find({...keyword});  
  res.send(products);
}));

productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
}));

productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
  console.log(req.params.id);
  const product = await Product.findById(req.params.id);
  if (product) {
    console.log(product);
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Was Not Found' })
  }
}));

export default productRouter;