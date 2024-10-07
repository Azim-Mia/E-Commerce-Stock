const socketConfig =(expressServer)=>{
  const { Server } =require('socket.io');
const io = new Server(expressServer);
// create web soket.io use this server
io.on('connection', (socket)=>{
  console.log("New User is connected");
  socket.on('disconnetd', ()=>{
    console.log("User is disconnetd");
  });
});
io.on('connection', (socket)=>{
    socket.send("hello socket");
})
}
module.exports = socketConfig;