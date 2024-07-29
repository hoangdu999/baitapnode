const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const connectDB = require('./configs/database');

const router = require('./routers');
//HTTP method: GET, POST...

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', 'view');
app.set('view engine', 'ejs');
app.use(express.static('./public'));

//images public
app.use(express.static('./uploads'));

//socket
io.on('connection', function (client) {
  console.log('Có người kết nối');
  let room;
  client.on('join', function (data) {
    room = data;
    client.join(room);
  });

  client.on('messages', function (data) {
    io.to(room).emit('thread', data);
  });
});

connectDB();
router(app);

server.listen(5000, () => {
  console.log('server run at port 5000');
});
