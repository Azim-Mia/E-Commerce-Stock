const mongoose = require('mongoose');
const slugify = require('slugify');
const categorySchema = new mongoose.Schema({
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
catagortName:{
  type:String,
  trim:true,
  required:[true, "Category Name is valid"],
},
color:{
  type:mongoose.Types.ObjectId,
  ref:"color",
}
images: [{
type: String,
trim: true,
}],
createdAt: {
type: Date,
default: Date.now,
},
updatedAt: {
type: Date,
default: Date.now,
},
});

const Category = new mongoose.model('category', categorySchema);
module.exports = Category;
