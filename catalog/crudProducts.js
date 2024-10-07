const {errorResponse,successResponse} =require('/data/data/com.termux/files/home/E-Commerce-Stock/responseHandle/responseHandle.js')
//const Products = require('../../E-Commerce-Stock/databaseModels/productModel/productSchema.js')
const createProduct =async(req,res,next)=>{
try{
  //const newProduct = await 
  return successResponse(res, {
    success:true,
    message:"User is Create Successfull",
  })
}catch(error){
  if(error instanceof mongoose.Error){
   throw createError(404, 'Not Create product');
  }
  next(error);
}
}

const readProducts =async(req,res,next)=>{
try{
  //const newProduct = await 
  return successResponse(res, {
    success:true,
    message:"User is Create Successfull",
  })
}catch(error){
  if(error instanceof mongoose.Error){
   throw createError(404, 'Not Create product');
  }
  next(error);
}
}

const readProduct =async(req,res,next)=>{
try{
  //const newProduct = await 
  return successResponse(res, {
    success:true,
    message:"User is Create Successfull",
  })
}catch(error){
  if(error instanceof mongoose.Error){
   throw createError(404, 'Not Create product');
  }
  next(error);
}
}

const updateProduct =async(req,res,next)=>{
try{
  //const newProduct = await 
  return successResponse(res, {
    success:true,
    message:"User is Create Successfull",
  })
}catch(error){
  if(error instanceof mongoose.Error){
   throw createError(404, 'Not Create product');
  }
  next(error);
}
}

const deleteProduct =async(req,res,next)=>{
try{
  //const newProduct = await 
  return successResponse(res, {
    success:true,
    message:"User is Create Successfull",
  })
}catch(error){
  if(error instanceof mongoose.Error){
   throw createError(404, 'Not Create product');
  }
  next(error);
}
}

module.exports = {createProduct,readProducts,readProduct, updateProduct, deleteProduct}