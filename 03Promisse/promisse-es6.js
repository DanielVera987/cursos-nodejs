'use strict'

const { reject } = require('q')

let fs = require('fs'),
    file = './assets/nombres.txt',
    newFile = './assets/nombres-callback-es6.txt',
    promise = new Promise((resolve, reject) => {
      fs.access(file, fs.F_OK, function(err){
        return (err) ? reject(new Error('El archivo no existe')) : resolve(true)
      })
    })

promise
    .then((resolve, reject) => {
      
      return new Promise((resolve, reject) => {
      fs.readFile(file, function(err, data){
        return (err) ? reject(new Error('El archivo no se pudo leer')) : resolve(data)
      })
      })
    })
    .then((resolve, reject) => {
      fs.writeFile(newFile, resolve, function(err){
        return (err) ? reject(new Error("El archivo no se pudo copias")) : resolve('El archivo se ha copiado con exito')
      })
    })
    .then((resolve, reject) => {
      console.log(resolve)
    })
    .catch((err) => {
      console.log(err.message)
    })