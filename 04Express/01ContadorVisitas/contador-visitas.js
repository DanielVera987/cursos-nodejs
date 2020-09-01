'use strict'

let express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session')

app
    .use( cookieParser() )
    .use( cookieSession({secret : "secreto"}) )
    .get('/', (req, res) => {
      req.session.visitas || (req.session.visitas = 0)
      let n = req.session.visitas++
      res.send(`Hola desde Express, me has visitado ${n} veces!`)
    })
    .listen(3000, () => {
      console.log(`app escuchando en http://localhost:3000`)
    })