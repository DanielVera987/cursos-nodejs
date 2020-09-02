'use strict'

const express = require('express'),
      favicon = require('serve-favicon'),
      jade = require('jade'),
      routes = require('./routes/index'),
      faviconURL = `${__dirname}/public/img/node-favicon.png`,
      publicDir = express.static(`${__dirname}/public`),
      viewDir = `${__dirname}/view`,
      port = (process.env.PORT || 3000),
      app = express()

app 
  //Configurando app
  .set('views', viewDir)
  .set('view engine', 'jade')
  .set('port', port)
  //ejecutando middlewares
  .use( favicon(faviconURL) )
  .use(publicDir)
  //ejecuto el middleware Enrutador
  .use('/', routes)

module.exports = app