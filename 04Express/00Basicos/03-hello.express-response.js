'use strict'

let express = require('express'),
    app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/daniel', (req, res) => {
  //res.send('Bienvenidos a DavaDev || Daniel Vera!')
  res.redirect(301,'http://danielvera.com.mx')
})

app.get('/json', (req, res) => {
  res.json({
    name: "Jonathan",
    age: 31,
    twitter: "@_davadev"
  })
})

app.get('/render', (req, res) => {
  res.render('assets/index.html')
})

app.listen(3000, () => {
  console.log(`app escuchando en http://localhost:3000`)
})