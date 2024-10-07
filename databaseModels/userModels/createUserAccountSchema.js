const mongoose =require('mongoose');
const bcrypt=require('bcryptjs');
const userAccountSchema = new mongoose.Schema({
 name:{
   type:String,
   lowercase:true,
   trim:true,
   required:[true, "User firestName is required"],
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
    trim:true,
    required:[true, "Image must be required"],
  },
  status:{
    type:String,
    enum:['active', 'inactive'],
  },
  updatedAt: {
type: Date,
default: Date.now,
},
},{timestams:true});
const User = new mongoose.model("User", userAccountSchema);
module.exports = User;
