const jwt =require('jsonwebtoken');
const { accessTokenKey }=require('../../../E-Commerce-Stock/secret.js');
const User =require('/data/data/com.termux/files/home/E-Commerce-Stock/databaseModels/userModels/createUserAccountSchema.js');
const activeAccount =async(req,res,next)=>{
  const { token } = req.body;
  const decoded = await jwt.verify(token, accessTokenKey);
  if(!decoded){
    res.json({success:false, message:"user not success verify"});
  };
const result  =await User.create(decoded);
res.json({success:true,message:"Successfull"})
}
module.exports = activeAccount;