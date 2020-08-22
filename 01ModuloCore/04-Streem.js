/*
Streams
  'Chorros' de informacion que se transmiten en Pedazos (Chunks)
  3 Tipos: Lectura / Escritura / Duplex
  Instancias de EventEmitter
  Acceso asincrono
  Es raro crear steams directamente
  Per muchos recursos nos ofrecen este insterfaz
  Detras de muchos mecanismos de Node.js
    Stdin/stdout
    request de HTTP
    Sockets
    Manipulacion de ficheros/Imagenes
*/

'use strict'

let fs = require('fs'),
    readStream = fs.createReadStream('assets/nombres.txt'), //´Para leer un archivo
    writeStream = fs.createWriteStream('assets/nombres_copia.txt')

/* 
readStream.pipe(writeStream);

readStream.on('data', (chunk) => {
  console.log(
    'He leido',
    chunk.length,
    'caracteres'
  );
}); 

readStream.on('end', () => {
  console.log('Termine de leer el archivo')
});
*/

/* DE UNA FORMA LIMPIA  */
readStream
  .pipe(writeStream)
  .on('data', (chunk) => {
    console.log(
      'He leido',
      chunk.length,
      'caracteres'
    );
  })
  .on('end', () => {
    console.log('Termine de leer el archivo')
  });