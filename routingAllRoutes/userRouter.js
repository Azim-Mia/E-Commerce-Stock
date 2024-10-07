const express = require('express');
const activeAccount= require('/data/data/com.termux/files/home/E-Commerce-Stock/authUser/verifyUser/verifyUser.js');
const { runValidation }= require('/data/data/com.termux/files/home/E-Commerce-Stock/schemaValidators/runValidation.js')
const {validationUserAndAdmin}= require('/data/data/com.termux/files/home/E-Commerce-Stock/schemaValidators/validationUserAndAdmin.js');
const { userController,findAllUser } =require('/data/data/com.termux/files/home/E-Commerce-Stock/authUser/crudUser/userAccountController.js')
const userRouter = express.Router();
userRouter.post('/create',validationUserAndAdmin,runValidation, userController);
userRouter.post('/create/token', activeAccount);
userRouter.get('/findAll', findAllUser);
module.exports = userRouter;