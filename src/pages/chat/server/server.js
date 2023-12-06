const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

let userCount = 0; // Variável para controlar o número de usuários conectados

io.on('connection', (socket) => {
  userCount++; 
  console.log('a user connected. Total users: ', userCount);

  socket.on('message', (msg) => {
    console.log('message: ' + msg);
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    userCount--; 
    console.log('user disconnected. Total users: ', userCount);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
