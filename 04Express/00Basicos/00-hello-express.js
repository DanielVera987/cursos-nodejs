'use strict'

let express = require('express'),
    app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log(`app escuchando en http://localhost:3000`)
})