'use strict'; //Uso estricto para javascript

const http = require('http'); //Se require de la clase http para levantar el servidor

const hostname = '127.0.0.1';
const port = 3000;

// Creamos nuestro servidor
const server = http.createServer((req, res) => { //Creamos nuestra constante server para crear el servidor
  res.statusCode = 200; //Le indicamos nuestro estado de respuesta
  res.setHeader('Content-Type', 'text/plain'); //Le indicamos el tipo de contenido
  res.end('Hello World'); //Cerramos enviandole un texto
});

//Le indicamos en donde estara escuchando el servidor para levantarlo
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

