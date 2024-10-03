const mongoose =require('mongoose');
const {db_url} =require("../../E-Commerce-Stock/secret.js");
const connectDB=async()=>{
  try{
    await mongoose.connect(db_url);
    console.log("E-Commerce Store db connection successfull")
    //process.exit(1);
  }catch(err){
  console.log(err.message)
  }
}
module.exports=connectDB;