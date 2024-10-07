const mongoose = require('mongoose');
const slugify = require('slugify');
const subCategorySchema = new mongoose.Schema({
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
category_id:{
  type:mongoose.Types.ObjectId,
  ref:"category",
}
});
const Subcategory = new mo.model('subcategory', subCategorySchema);
module.exports= Subcategory;