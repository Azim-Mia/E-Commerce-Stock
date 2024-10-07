const mongoose =require('mongoose');
const validator = require('validator');
const bcrypt=require('bcryptjs');
const adminAccountSchema = new mongoose.Schema({
name:{
   type:String,
   trim:true,
   minLength:[3, 'minimum length three charecter'],
   mixLength:[30, 'minimum length thirty charecter'],
   required:[true, 'no empty User name'],
   lowercase:true,
  },
email:{
        type: String,
        trim:true,
        lowercase: true,
        unique: true,
        required:[true, 'no empty Email'],
        validate: {
    validator: function(v) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"],
    },
    password:{
   type:String, 
   trim:true,
   required:[true, 'no empty Password'],
  set:(v)=>bcrypt.hashSync(v,bcrypt.genSaltSync(10)),
  },
  phone:{
    type:Number,
    required:[true, "phone number is required"],
  },
  image:{
    type:String,
  },
  isAdmin:{
     type:Boolean, 
    default:false,
  },
},{timestams:true});
const AdminAccountSchema = new mongoose.model("admin", adminAccountSchema);
module.exports = AdminAccountSchema;
