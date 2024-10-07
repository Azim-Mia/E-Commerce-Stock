const express =require('express');
const catalogRouter = express.Router();
 
 const {createProduct,readProducts,readProduct, updateProduct, deleteProduct} =require('/data/data/com.termux/files/home/E-Commerce-Stock/catalog/crudProducts.js');
catalogRouter.post('/create',createProduct)
catalogRouter.get('/findAll',readProducts)
catalogRouter.get('/findSingle',readProduct)
catalogRouter.put('/update',updateProduct)
catalogRouter.delete('/delete',deleteProduct)
module.exports= catalogRouter;