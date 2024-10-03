//third parti module
const express = require('express');
const App = express();
const http = require('http');
const cors = require('cors');
 const expressServer = http.createServer(App)
 const socketConfig =require('./WebSocketFile/socket.config.js');
 socketConfig(expressServer);
 
 App.use(cors({
  origin:["http://localhost:3000","http://localhost:8158","http://localhost:3001","http://localhost:3002"],
methot:["PUT","POST","GET","UPDATE"],
credentials:true,
}));
App.get('/', (req,res)=>{
  res.sendFile(__dirname+'/index.html')
})
module.exports = {expressServer};
