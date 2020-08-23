'use strict'

let http = require('http').createServer(webServer),
    form = require('fs').readFileSync('assets/formularios.html'),
    querystring = require('querystring'),
    util = require('util'),
    dataString = ''

function webServer(req, res) 
{
  if(req.method == 'GET')
  {
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(form)
  }

  if(req.method == 'POST')
  {
    req
      .on('data', (data) => {
        dataString += data
      })
      .on('end', () => {
        let dataObject = querystring.parse(dataString),
            dataJSON = util.inspect(dataObject),
            stringTemplate = `
Los datos que enviaste por post como string son_: ${dataString}
Los datos que enviaste por post como objecto son: ${dataJSON}
            `

        console.log(stringTemplate)
        res.end(stringTemplate)
      })
  }
}

http.listen(3000)

console.log('Servidor corriendo en http://localhost:3000/')