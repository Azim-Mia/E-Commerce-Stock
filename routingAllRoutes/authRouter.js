const express =require('express');
const authRouter = express.Router();


const {loginUser,loginAdmin} =require('/data/data/com.termux/files/home/E-Commerce-Stock/authUser/auth/login.js')

const {changePasswordUser,changePasswordAdmin} =require('/data/data/com.termux/files/home/E-Commerce-Stock/authUser/auth/changePassward.js');

authRouter.post('/user/login', loginUser);
authRouter.put('/user/changePin', changePasswordUser);
authRouter.post('/admin/login', loginAdmin);
authRouter.put('/admin/changePin', changePasswordAdmin);
module.exports = authRouter;