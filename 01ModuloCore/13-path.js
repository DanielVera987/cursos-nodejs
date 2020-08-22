/*
Path
Contiene utilidades para manejar y transformar las rutas de los directorios yy archivos a formato de cadena. El sistema de archivos no es consultado para comprobar si los caminos son validos
*/

'use strict'

let http = require('http').createServer(webServer),
    path = require('path'),
    urls = [
      {
        route: '',
        output: '<h2>Home</h2>'
      },
      {
        route: 'acerca',
        output: '<h2>Acerca</h2>'
      },
      {
        route: 'contancto',
        output: '<h2>contacto</h2>'
      }
    ]

function webServer(req, res) {
  let message = '<h1>Hola Node.js</h1>',
      pathURL = path.basename(req.url)
    
  urls.forEach( (pos) => {
    if(pos.route == pathURL){
      res.writeHead(200, {'Content-Type':'text/html'})
      res.end(message + pos.output)
    }
  })

  if(!req.finished)
  {
    res.writeHead(404, {'Content-Type':'text/html'})
    res.end('<h1>Error 404: Not Found</h1>')
  }
}

http.listen(3000)

console.log('Servidor corriendo en http://localhost:3000/')