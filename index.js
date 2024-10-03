const {expressServer} =require('./App.js');
const {server_port} =require('./secret.js');
const connectDB = require('/data/data/com.termux/files/home/E-Commerce-Stock/config/db.js');
expressServer.listen(server_port, ()=>{
  console.log(`http://localhost:${server_port}`);
  connectDB();
})