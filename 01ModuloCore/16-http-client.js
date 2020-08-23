'use strict'

let http = require('http'),
    options = {
      host : 'danielvera.com.mx',
      port : 80,
      path : '/'
    }

http
  .get(options, (res) => {
    console.log(`El sitio ${options.host} ha respondido. Codigo de Estado ${res.statusCode}`)
  })
  .on('error', (err) => {
    console.log(`El sitio ${options.host} no respondido. Codigo de Estado: ${err.code} el mensaje es: ${err.message}`)
  })