const jwt = require('jsonwebtoken');
const bcrypt=require('bcryptjs');

const AdminAccountSchema=require('/data/data/com.termux/files/home/E-Commerce-Stock/databaseModels/adminModel/adminSchema.js');
const User =require('/data/data/com.termux/files/home/E-Commerce-Stock/databaseModels/userModels/createUserAccountSchema.js');
const {accessTokenKey} =require('/data/data/com.termux/files/home/E-Commerce-Stock/secret.js');
const changePasswordUser = async(req,res,next)=>{
  const {oldPassword, newPassword} =req.body;
  const token = req.cookies.accessToken
  if(!token){
    res.json({success:false, message:"not found accessToken"});
    return;
  }
  const decoded = await jwt.verify(token, accessTokenKey);
  if(!decoded){
    res.json({success:false, message:"docoded problem"})
return;
  }
  const {email, id} =decoded;
  const user = await User.findOne({email:email});
  if(!user){
    res.json({success:false, message:"User problem"})
    return;
  }
  const isPasswordMatch= await bcrypt.compare(oldPassword, user.password);
  if(!isPasswordMatch){
    res.json({success:false, message:"password not match"})
    return;
  }
  if(oldPassword === newPassword){
    res.json({success:false, message:"Somthing Problem"});
    return;
  }
  const updateOptions= { new:true, runValidators:true, context:'query'};
  let updates={ password:newPassword };
  const result = await User.findByIdAndUpdate(id, updates, updateOptions);
  if(!result){
    res.json({success:false, message:"something Problem"})
  }else{
    res.json({success:true,message:"update successfull"})
  }
}

const changePasswordAdmin = async(req,res,next)=>{
  const {oldPassword, newPassword} =req.body;
  const token = req.cookies.accessToken
  if(!token){
    res.json({success:false, message:"not found accessToken"});
    return;
  }
  const decoded = await jwt.verify(token, accessTokenKey);
  if(!decoded){
    res.json({success:false, message:"docoded problem"})
return;
  }
  const {email, id} =decoded;
  const user = await AdminAccountSchema.findOne({email:email});
  if(!user){
    res.json({success:false, message:"Admin problem"})
    return;
  }
  const isPasswordMatch= await bcrypt.compare(oldPassword, user.password);
  if(!isPasswordMatch){
    res.json({success:false, message:"password not match"})
    return;
  }
  const updateOptions= { new:true, runValidators:true, context:'query'};
  let updates={ password:newPassword };
  const result = await AdminAccountSchema.findByIdAndUpdate(id, updates, updateOptions);
  if(!result){
    res.json({success:false, message:"something Problem"})
  }else{
    res.json({success:true,message:"update successfull"})
  }
}
module.exports = {changePasswordUser,changePasswordAdmin};