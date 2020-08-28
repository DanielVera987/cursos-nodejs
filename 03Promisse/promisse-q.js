'use strict'

const { defer } = require('q')

let fs = require('fs'),
    Q = require('q'),
    file = './assets/nombres.txt',
    newFile = './assets/nombres-callback-q.txt'

function existFile(file)
{
  let difer = Q.defer()
  fs.access(file, fs.F_OK, function(err){
    return (err) ? defer.reject(new Error('El archivo no existe')) : defer.resolve(true)
  })

  return defer.promise
}

function readFile(file)
{
  let defer = Q.defer()
  fs.readFile(file, function(err, data){
    return (err) ? defer.reject(new Error('El archivo no se pudo leer')) : defer.resolve(data)
  })

  return defer.promise
}

function writeFile(file, data)
{
  let defer = Q.defer()

  fs.writeFile(file, data, function(err){
    return (err) ? defer.reject(new Error("El archivo no se pudo copias")) : defer.resolve('El archivo se ha copiado con exito')
  })

  return defer.promise
}
/*
  Si existe
    //Leelo
    //Copialo
    //Avisa que todo OK
    //Manejo Errores
*/
existFile(file)
  .then( () => { return readFile(file) })
  .then( (dataPromise) => { return writeFile(newFile, dataPromise) })
  .then( (dataPromise) => { return console.log(dataPromise) })
  .fail( (err) => { return console.log(err.message) })
