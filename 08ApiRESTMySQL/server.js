'use strict'

const app =  require('./app.js'),
      server = app.listen(app.get('port'), () => {
        console.log(`iniciando express en el puesto ${app.get('port')}`)
      })