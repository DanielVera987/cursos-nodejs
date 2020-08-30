'use strict'

let express = require('express'),
    app = express()

app.get('/', (req, res) => {
  res.sendFile( `${__dirname}/assets/index.html` )
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})