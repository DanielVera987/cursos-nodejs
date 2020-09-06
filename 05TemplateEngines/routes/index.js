'use strict'

const { route } = require('../app')

const express = require('express'),
      router = express.Router()

router
    .get('/', (req, res) => {
      res.end('<h1>Hola desde express, he aprendo a crear la configuracion usando express</h1>')
    })

    .get('/jade', (req, res, next) => {
      let locals = {
        title : 'Jade',
        link : 'http://jade-lang.com/',
        description : 'Jade es un template engine” (motor de plantillas) de alto performance, enfocado en permitir escribir código HTML de forma rápida. Podríamos decir que se trata de un pre-procesador de código html; similar a stylus, sass o less con respecto a CSS. Jade es fuertemente influenciado por HAML e implementado para Javascript con Node. Jade usa la Indentación(sangrado) para definir la jerarquía de nuestro documento html, no tendremos que escribir tags html < />, estos serán generados por jade al momento de compilar nuestro código jade.'
      }
      res.render('index', locals)
    })

    .get('/ejs', function(req, res, next){
      let locals = {
        title : 'Ejs',
        link : 'http://embeddedjs.com/',
        description : 'EJS limpia el HTML del JavaScript con plantillas del lado cliente. Combina datos y una plantilla para producir HTML. Código entre <% %> se ejecuta. Código entre <%= %> lo añade al HTML que se resuelve.',
        seasons : [
          ['Primavera', ['Abril', 'Mayo', 'Junio']],
          ['Verano', ['Julio', 'Agosto', 'Septiembre']],
          ['Otoño', ['Octubre', 'Noviembre', 'Diciembre']],
          ['Invierno', ['Enero', 'Febrero', 'Marzo']],
        ]
      }
      res.render('index', locals)
    })

    .use((req, res, netx) => {
      let error = new Error(),
          locals = {
            title : 'Error 404',
            description : 'Recurso No Encontrado',
            error : error
          }

      error.status = 404

      res.render('error', locals)

      next()
    })


module.exports = router