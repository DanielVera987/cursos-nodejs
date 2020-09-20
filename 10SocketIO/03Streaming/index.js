'use strict'


var app = require('express')(),
	http = require('http').createServer(app),
	io = require('socket.io')(http),
	port = process.env.PORT || 3000,
	publicDir = `${__dirname}/public`

http.listen(port, () =>{
  console.log(`El servidor esta escuchando en el puerto ${port}`)
})

app
  .get('/', (req, res) => {
		res.sendFile(`${publicDir}/client.html`)
	})
  .get('/stream', (req, res) => {
    res.sendFile(`${publicDir}/server.html`)
  })

io.on('connection', (socket) => {

})