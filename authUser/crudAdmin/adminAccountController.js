const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const AdminAccountSchema=require('/data/data/com.termux/files/home/E-Commerce-Stock/databaseModels/adminModel/adminSchema.js');
const {accessTokenKey,smtpPassword,smtpUser,clientUrl}=require('/data/data/com.termux/files/home/E-Commerce-Stock/secret.js');
const  emailWithNodeMailer  =require('/data/data/com.termux/files/home/E-Commerce-Stock/authUser/sendEmail/sendEmail.js');
const adminController = async(req,res,next)=>{
try{
const {email}= req.body;
const findEmail= await AdminAccountSchema.findOne({email:email});
if(findEmail){
  res.json({success:false, message:"User Already Register"})
  return;
}
  const data = {...req.body };
const token =await jwt.sign(
  data, accessTokenKey, { expiresIn: 60 * 60 * 2 });
  if(!token){
    res.json({success:false, message:"token problem"})
    return;
  }
const emailData={
  email,
  subject:'Active Account Email',
  html:`<h2>Hello User</h2>
  <div>Verify your email</div>
  <div><a href="${clientUrl}/active/:${token}" target="_blank ">Active Accound</a></div>
  `
};
await emailWithNodeMailer(emailData)
res.json({success:true, message:"Verify cheack your Email",token:token});
}catch(error){
  next(createError(error.message))
}
}
const getAdmin =async(req,res,next)=>{
  try{
   const result = await  AdminAccountSchema.find();
   if(!result){
     res.json({success:false,message:"Admin not Found"})
  return;
   }else{
   res.json({success:true,message:"Admin is Founded", result:result});  
  return;
   }
  }catch(error){
    next(createError(error.message))
  }
}
module.exports ={adminController, getAdmin};