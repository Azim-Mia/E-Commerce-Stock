//third parti module
const express = require('express');
const createError = require('http-errors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const app = express();
const http = require('http');
const cors = require('cors');
 const expressServer = http.createServer(app)
 const socketConfig =require('./WebSocketFile/socket.config.js');
 
const adminRouter =require('../E-Commerce-Stock/routingAllRoutes/adminRouter.js')
const userRouter =require('../E-Commerce-Stock/routingAllRoutes/userRouter.js')
const  catalogRouter=require('../E-Commerce-Stock/routingAllRoutes/catalogRouter.js')
const  authRouter=require('../E-Commerce-Stock/routingAllRoutes/authRouter.js')
//create web socket 
 socketConfig(expressServer);
 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
 app.use(cors({
  origin:["http://localhost:3000","http://localhost:8158","http://localhost:3001","http://localhost:3002"],
methot:["PUT","POST","GET","UPDATE"],
credentials:true,
}));
app.use(cookieParser());
app.use(express.static('frontend/build'));
//all routes
app.use('/admin', adminRouter);
app.use('/user', userRouter);
app.use('/catalog/products', catalogRouter);
app.use('/auth', authRouter);
//client all route connect
app.get('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname, 'frontend','build','index.html'));
})
app.use((req,res,next)=>{
  next(createError(404, "Route is not found"))
});
app.use((err,req,res,next)=>{
  res.status(err.status || 500).json({
    success:"false",
    message:err.message,
  });
});
module.exports = {expressServer};
