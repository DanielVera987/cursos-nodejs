'use strict'

let mysql = require('mysql'),
    dboptions = {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : '',
      database : 'movies'
    },
    myConn = mysql.createConnection(dboptions)

myConn.connect(() => {
  return (err)  ? console.log(`Error al conectarse a la BD ${err.stack}`) : console.log(`Conexion establecida con MySQL N°: ${myConn.threadId}`)
})
module.exports = myConn