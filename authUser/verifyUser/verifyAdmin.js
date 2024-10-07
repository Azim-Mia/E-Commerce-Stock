const jwt =require('jsonwebtoken');
const createError = require('http-errors')
const { accessTokenKey }=require('../../../E-Commerce-Stock/secret.js');
const AdminAccountSchema=require('../../../E-Commerce-Stock/databaseModels/adminModel/adminSchema.js');
const activeAccount =async(req,res,next)=>{
  try{
  const { token } = req.body;
  const decoded = await jwt.verify(token, accessTokenKey);
  console.log(decoded)
  if(!decoded){
    res.json({success:false, message:"user not success verify"});
    return;
  };
const result  =await AdminAccountSchema.create(decoded);
res.json({success:true,message:"Successfull"})  
  }catch(error){
  next(createError(error.message)); 
  }
}
module.exports = activeAccount;