const express = require('express');
const { adminController, getAdmin } =require('/data/data/com.termux/files/home/E-Commerce-Stock/authUser/crudAdmin/adminAccountController.js')
const { runValidation }= require('/data/data/com.termux/files/home/E-Commerce-Stock/schemaValidators/runValidation.js')
const {validationUserAndAdmin}= require('/data/data/com.termux/files/home/E-Commerce-Stock/schemaValidators/validationUserAndAdmin.js');
const activeAccount= require('/data/data/com.termux/files/home/E-Commerce-Stock/authUser/verifyUser/verifyAdmin.js');
const adminRouter = express.Router();
adminRouter.get('/findAll', getAdmin)
adminRouter.post('/create',validationUserAndAdmin,runValidation,adminController)
adminRouter.post('/create/token',activeAccount);
module.exports = adminRouter;