'use strict'

const express = require('express'),
      router = express.Router()

router.get('/', (req, res) => {
  res.end('<h1>Hola desde express, he aprendo a crear la configuracion usando express</h1>')
})

module.exports = router