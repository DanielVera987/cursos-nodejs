'use strict'

let http = require('http'),
    options = {
      host : 'danielvera.com.mx',
      port : 80,
      path : '/'
    },
    htmlCode = ''
    
const httpClient = (res) => 
{
  console.log(`El sitio ${options.host} ha respondido. Codigo de Estado ${res.statusCode}`)
  res.on('data', (data) => {
    htmlCode += data 
  })
}

const httpError = (err) => 
{
  console.log(`El sitio ${options.host} no respondido. Codigo de Estado: ${err.code} el mensaje es: ${err.message}`)
}

const webServer = (req, res) => 
{
  res.writeHead(200, {'Content-Type':'text/html'})
  res.end(htmlCode)
}

//Instancia cliente de Http
http
  .get(options, httpClient)
  .on('error', httpError)

//Instancia servidor de Http
http
  .createServer(webServer)
  .listen(3000)

console.log('Servidor corriendo en http://localhost:3000/')