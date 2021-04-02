'use strict';

const port = process.env.PORT || 3000;
const io = require('socket.io')(port);

//this is making you name≠≠––––––space////////////
///this will be caps namespace////////////
// const extremities = io.of('/extremities');
const caps = io.of('/caps'); 

// Global stuff
io.on('connection', (socket) => {
  console.log('Welcome to the main server', socket.id);

  // The entire body cares about light
  socket.on('pickup', (payload) => {
    console.log('package pickup', payload)
    socket.broadcast.emit('pickup', payload);
  });
  
  socket.on('in-transit', (payload) => {
    console.log('package in-transit', payload)
    socket.broadcast.emit('in-transit', payload);
  });

  socket.on('delivered', (payload) => {
    console.log('package delivered', payload)
    socket.broadcast.emit('delivered', payload);
  });
});





