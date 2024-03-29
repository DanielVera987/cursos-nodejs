/*
URL
https://nodejs.org/api/url.html
Este modulo dispone de utilidades para la resolucion y analisis de URLs

Query String
https://nodejs.org/api/querystring.html
Este modulo proporciona utilidades para hacer frente a las cadenas de consulta
*/

'use strict'

let http = require('http').createServer(webServer),
    fs = require('fs'),
    path = require('path'),
    url = require('url'),
    urls = [
      {
        id : 1,
        route: '',
        output: 'assets/index.html'
      },
      {
        id : 2,
        route: 'acerca',
        output: 'assets/acerca.html'
      },
      {
        id : 3,
        route: 'contancto',
        output: 'assets/contacto.html'
      }
    ]

function webServer(req, res) 
{
  let pathURL = path.basename(req.url),
      id = url.parse(req.url, true ).query.id

  console.log(`path:${pathURL}, id: ${id}`)

    
  urls.forEach( (pos) => {
    if(pos.route == pathURL || pos.id == id){
      res.writeHead(200, {'Content-Type':'text/html'})
      fs.readFile(pos.output, (err, data) => {
        if(err) throw err
        res.end(data)
      })
    }
  })

  if(!req.finished)
  {
    res.writeHead(404, {'Content-Type':'text/html'})
    fs.readFile('assets/404.html', (err, data) => {
      if(err) throw err
      res.end(data)
    })
  }
}

http.listen(3000)

console.log('Servidor corriendo en http://localhost:3000/')