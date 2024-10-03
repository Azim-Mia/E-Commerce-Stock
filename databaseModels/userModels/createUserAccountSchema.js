const {Schema, model} =require('mongoose');
const bcrypt=require('bcryptjs');
const userAccountSchema = new Schema({
 firestName:{
   type:String,
   lowercase:true,
   trim:true,
   required:[true, "User firestName is required"],
 },
 lastName:{
   type:String,
   lowercase:true,
   trim:true,
   required:[true, "User last Name is required"]
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
  urlToImage:{
    type:String,
    trim:true,
    required:[true, "Image must be required"],
  },
  status:{
    type:String,
    enum:["actie", "inactive"],
  },
  isBaned:{
    type:Boolean,
    default:false,
  },
},{timestams:true});
const UserSchema = new model("userAccountSchema", userAccountSchema);
module.exports = UserSchema;
