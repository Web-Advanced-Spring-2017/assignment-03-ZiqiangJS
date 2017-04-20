var express= require('express');

var app= express();
var server= app.listen(3000);

app.use(express.static('public'));

var socket= require('socket.io');
var io= socket(server);

console.log("Running");

io.sockets.on('connection', function(socket){
	console.log('new connection: ' + socket.id);

	socket.on('mouse', function(data){
		console.log(data);
		socket.broadcast.emit('mouse', data);
	}); 
});
