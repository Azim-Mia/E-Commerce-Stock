const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const User =require('/data/data/com.termux/files/home/E-Commerce-Stock/databaseModels/userModels/createUserAccountSchema.js');
const  emailWithNodeMailer  =require('/data/data/com.termux/files/home/E-Commerce-Stock/authUser/sendEmail/sendEmail.js');
const {accessTokenKey, clientUrl}=require('/data/data/com.termux/files/home/E-Commerce-Stock/secret.js');
const {errorResponse,successResponse} =require('/data/data/com.termux/files/home/E-Commerce-Stock/responseHandle/responseHandle.js')
const userController = async(req,res,next)=>{
  const {email}= req.body;
const findEmail= await User.findOne({email:email});
if(findEmail){
  res.json({success:false, message:"User Already Register"})
  return;
}
  const data = {
    ...req.body,
  }
  const token = await jwt.sign(data, accessTokenKey, { expiresIn: 60 * 60 * 2 });
  const emailData={
  email,
  subject:'Verify Account Email',
  html:`<h2>Hello User</h2>
  <div>Verify your email</div>
  <div><a href="${clientUrl}/active/:${token}" target="_blank ">Active Accound</a></div>
  `
};
res.json({success:true, message:"Verify Account Cheack your email", token:token});
}
const findAllUser = async(req,res,next)=>{
  try{
   const findAll = await User.find();
   if(!findAll){
     res.json({success:false, message:"Something problem"});
   return;
   }
   return successResponse(res, {
     success:true,
     message:"All user return successfull",
     payload:{findAll}
   })
  }catch(error){
    next(createError(error.message));
  }
}
module.exports ={userController, findAllUser};