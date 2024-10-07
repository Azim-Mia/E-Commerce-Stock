const mongoose = require('mongoose');
const slugify = require('slugify');
const productSchema = new mongoose.Schema({
id:{
  type:mongoose.Types.ObjectId,
},
category:{
  type:mongoose.Types.ObjectId,
  ref:"category",
},
sub_category:{
  type:mongoose.Types.ObjectId,
  ref:"subcategory",
},
brand_id:{
  type:mongoose.Types.ObjectId,
  ref:"brand",
},
unit_id:{
  type:mongoose.Types.ObjectId,
  ref:"unit",
},
city_id:{
  type:mongoose.Types.ObjectId,
  ref:"city",
},
product_code:{
  type:String,
  required:[true, "product code must be require"],
},
name: {
type: String,
required: true,
trim: true,
minlength: 1,
},
slug:slugify(name);
description: {
type: String,
required: true,
trim: true,
},
price: {
type: Number,
required: true,
min: 0.01, // Enforce a minimum positive price
},
images: [{
type: String,
trim: true,
}],
stock: {
type: Number,
min: 0, // Enforce non-negative stock
},
status:{
  type:String,
}
createdAt: {
type: Date,
default: Date.now,
},
updatedAt: {
type: Date,
default: Date.now,
},
});

const Products = new mongoose.model('product', productSchema);
module.exports = Products;
