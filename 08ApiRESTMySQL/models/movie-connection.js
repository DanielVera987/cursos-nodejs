'use strict'

let mysql = require('mysql'),
    conf = require('./db-conf'),
    dboptions = {
      host : conf.mysql.host,
      port : conf.mysql.port,
      user : conf.mysql.user,
      password : conf.mysql.password,
      database : conf.mysql.database
    },
    myConn = mysql.createConnection(dboptions)

myConn.connect(() => {
  return (err)  ? console.log(`Error al conectarse a la BD ${err.stack}`) : console.log(`Conexion establecida con MySQL N°: ${myConn.threadId}`)
})
module.exports = myConn