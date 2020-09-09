'use strict'

let mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    dboptions = {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : '',
      database : 'movies'
    },
    Movies = myConnection(mysql, dboptions, 'request')

module.exports = Movies