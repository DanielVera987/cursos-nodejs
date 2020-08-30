'use strict'

let express = require('express'),
    app = express()

app
  .get('/', (req, res) => {
    res.end('<h1>Hola mundo desde Express :)</h1>')
  })
  
  .get('/users/:id-:name-:age', (req, res) => {
    res.end(`
      <h1>
        ${req.params.name}, bienvenid@ a Express :) tu id es <b>${req.params.id} </b> y tienes ${req.params.age} anios
      </h1>`)
  })

  .get('/search', (req, res) => {
    res.end(`
      <h1>
        Hola los reultados de tu busqueda son:
        ${req.query.s}
      </h1>
    `)
  })

  .listen(3000, () => {
    console.log('http://localhost:3000')
  })