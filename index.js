const cv = require('opencv4nodejs');
const path = require('path');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const wCap = new cv.VideoCapture(0);

//Video streaming
const FPS = 1;

app.get('/', (req, res) => {
  console.log('object');
  res.sendFile(path.join(__dirname, 'index.html'));
});

setInterval(() => {
  console.log(wCap);
  wCap.open(0);
  const frame = wCap.read();
  const image = cv.imencode('.jpg', frame).toString('base64')
  io.emit('image', image);
}, 1000 / FPS);

const PORT = process.env.PORT || 3000; 

http.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
} )