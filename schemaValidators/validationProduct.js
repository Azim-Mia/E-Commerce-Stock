//need npm package npm i express-validator,
const {body} =require('express-validator');
//registation validation
const validationProduct=[
 body('name')
  .trim()
  .notEmpty()
  .withMessage('Name is require.Enter Product');
  .isLength({min: 3, max:31})
  .withMessage('Name min charater 3 , max charater 31'),
 body('slug')
  .trim()
  .notEmpty()
  .withMessage('slug is something problem. Enter slug'),
  body(price)
  .trim(),
  .notEmpty(),
  withMessage("price is valied"),
  ];
  
module.exports= validationProduct;