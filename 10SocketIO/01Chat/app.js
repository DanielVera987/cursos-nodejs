'use strict'
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = process.env.port || 3000
const publicDir = express.static(`${__dirname}/public`)

app
  .use(publicDir)
  .get('/', (req, res) => {
    res.sendFile(`${publicDir}/index.html`)
  })

http.listen(port, () => {
  console.log('Iniciando Express y Socket.IO en el puerto 3000')
})
