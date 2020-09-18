'use strict'

const http = require('http').createServer(server),
      fs = require('fs'),
      io = require('socket.io')(http)
var   conexiones = 0

function server(req, res)
{
  fs.readFile('index.html', (err, data) => {
    if(err){
      res.writeHead(500,{'Content-Type':'text/html'})
      return res.end('<h1>Error Interno del servidor</h1>')
    }else{
      res.writeHead(200,{'Content-Type':'text/html'})
      return res.end(data, 'utf-8')
    }
  })
}

http.listen(3000)
console.log('Servidor escuchando en el puerto 3000')

io.on('connection', (socket) => {
  socket.emit('hello', { message : 'Hola Mundo con Socket.IO' })

  socket.on('otro evento que me invente', (data) => {
    console.log(data)
  })

  conexiones++

  console.log(`Conexiones activas ${conexiones}`)

  //socket.emit('connect users', { numbers : conexiones })
  socket.broadcast.emit('connect users', { numbers : conexiones })

  socket.on('disconnect', () => {
    conexiones--
    console.log(`Conexiones activas ${conexiones}`)
    socket.broadcast.emit('connect users', { numbers : conexiones })
  })
})