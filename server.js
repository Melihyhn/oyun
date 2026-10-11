const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

const rooms = {};

io.on('connection', (socket) => {
    socket.on('create_room', () => {
        const roomId = Math.random().toString(36).substring(2, 6).toUpperCase();
        rooms[roomId] = { host: socket, players: [] };
        socket.join(roomId);
        socket.emit('room_created', roomId);
        console.log(`Oda oluşturuldu: ${roomId}`);
    });

    socket.on('join_room', (roomId) => {
        if (rooms[roomId] && rooms[roomId].players.length < 2) {
            const playerIndex = rooms[roomId].players.length; 
            rooms[roomId].players.push(socket.id);
            socket.join(roomId);
            
            socket.emit('joined', playerIndex);
            rooms[roomId].host.emit('player_joined', playerIndex);
        }
    });

    // Gelen her türlü input'u (direksiyon açısı, gaz, fren) ana ekrana ilet
    socket.on('input', (data) => {
        if (rooms[data.roomId]) {
            rooms[data.roomId].host.emit('player_input', data);
        }
    });

    // Oyun bitişi ve sıfırlama işlemi
    socket.on('game_over', (oldRoomId) => {
        if (rooms[oldRoomId]) {
            socket.to(oldRoomId).emit('game_ended');
            delete rooms[oldRoomId]; 
        }
        
        const newRoomId = Math.random().toString(36).substring(2, 6).toUpperCase();
        rooms[newRoomId] = { host: socket, players: [] };
        socket.leave(oldRoomId); 
        socket.join(newRoomId);  
        socket.emit('room_created', newRoomId);
        console.log(`Eski oda kapatıldı. Yeni Oda: ${newRoomId}`);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});