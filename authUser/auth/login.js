const bcrypt=require('bcryptjs');
const AdminAccountSchema=require('/data/data/com.termux/files/home/E-Commerce-Stock/databaseModels/adminModel/adminSchema.js');
const User =require('/data/data/com.termux/files/home/E-Commerce-Stock/databaseModels/userModels/createUserAccountSchema.js');
const {makeAccessTokensService,makeRefreshTokensService}=require('/data/data/com.termux/files/home/E-Commerce-Stock/serviceProviders/makeTokenService.js')
const {accessTokenKey,refreshTokenKey}=require('/data/data/com.termux/files/home/E-Commerce-Stock/secret.js');
const {errorResponse,successResponse} =require('/data/data/com.termux/files/home/E-Commerce-Stock/responseHandle/responseHandle.js')
const loginUser = async(req,res,next)=>{
  try{
const {email,password}=req.body;
const user=await User.findOne({email:email})
if(!user){
  res.json({success:false,message:"User or Password not match.Try again now"})
  return;
}
const id=user._id;
const image=user.image;
const isPasswordMatch= await bcrypt.compare(password, user.password);
  if(!isPasswordMatch){
      res.json({success:false,message:"User or Password not match.Try again now"})
      return;
  };
  const token=await makeAccessTokensService({email,id,image},accessTokenKey,"2m")
  res.cookie("accessToken", token,{
  maxAge:2*60*1000,
    httpOnly:true,
   secure:true,
    date:new Date(),  
  })
  const reFreshToken=await makeRefreshTokensService({email,id,image},refreshTokenKey,"20m")
  res.cookie("refreshToken", reFreshToken,{
  maxAge:30*24*60*60*1000,
    httpOnly:true,
    secure:true,
    //sameSide:'none',
    date:new Date(),  
  })
  return successResponse(res,{
    success:true,
    message:"Login successFull",
    payload:{},
  })
  }catch(error){
    if(error instanceof mongoose.Error){
   next(createError(404,'mongoose problem ')) 
  }
  }
}

const loginAdmin = async(req,res,next)=>{
  try{
const {email,password}=req.body;
const user=await AdminAccountSchema.findOne({email:email})
if(!user){
  res.json({success:false,message:"User or Password not match.Try again now"})
  return;
}
const id=user._id;
const image=user.image;
const isPasswordMatch= await bcrypt.compare(password, user.password);
  if(!isPasswordMatch){
      res.json({success:false,message:"User or Password not match.Try again now"})
      return;
  };
  const token=await makeAccessTokensService({email,id,image},accessTokenKey,"2m")
  res.cookie("accessToken", token,{
  maxAge:60*60*1000,
    httpOnly:true,
    secure:true,
   // sameSide:'none',
    date:new Date(),  
  })
  const reFreshToken=await makeRefreshTokensService({email,id,image},refreshTokenKey,"20m")
  res.cookie("refreshToken", reFreshToken,{
  maxAge:30*24*60*60*1000,
    httpOnly:true,
    secure:true,
   // sameSide:'none',
    date:new Date(),  
  })
  return successResponse(res,{
    success:true,
    message:"Login successFull",
    payload:{},
  })
  }catch(error){
    if(error instanceof mongoose.Error){
   next(createError(404,'mongoose problem ')) 
  }
  }
}
module.exports = {loginUser,loginAdmin};