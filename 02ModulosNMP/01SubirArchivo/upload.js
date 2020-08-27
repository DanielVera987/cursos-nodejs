'use strict'

let http = require('http').createServer(serverUpload),
    util = require('util'),
    formidable = require('formidable'),
    fse = require('fs-extra')

function serverUpload(req, res)
{
  if(req.method == 'GET')
  {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(
      `<form action="/upload" enctype="multipart/form-data" method="post">
        <div><input type="file" name="upload" required></div>
        <div><input type="submit" value="Subir"></div>
      </form>`
      );
  }

  if(req.method == 'POST' && req.url == '/upload')
  { 
    let form = new formidable.IncomingForm()

    form 
        .parse(req, (err, fields, files) => {
          res.writeHead(200, {'Content-Type': 'text/html'})
          res.write('<h1>Archivos Recibidos</h1>' + util.inspect({files: files}))
          res.end()
        })
        .on('progress', (bytesReceived, bytesExpected) => {
          let percentCompleted = (bytesReceived / bytesExpected) * 100
          console.log(percentCompleted)
        })
        .on('error', (err) => {
          console.log(err)
        })
        .on('end', function(fields, files){
          
          let tempPath = this.openedFiles[0].path, //Ubicación temporal del archivo que se sube
              fileName = this.openedFiles[0].name, //El nombre del archivo subido
              newLocation = `./upload/${fileName}` //Nueva Ubicacion

              fse.copy(tempPath, newLocation, function(err){
                return (err) ? console.log(err) : console.log('El archivo se subio con exito')
              })          
        })

    return
  }
}

http.listen(3000)

console.log('Servidor corriendo en http://localhost:3000/')