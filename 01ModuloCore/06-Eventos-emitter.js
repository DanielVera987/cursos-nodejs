/*
//https://es.wikipedia.org/wiki/Observer_(patr%C3%B3n_de_dise%C3%B1o)
*/
'use strict';

let EventEmitter = require('events').EventEmitter,
    publicar = new EventEmitter();

publicar
  .on('myevent', (message) => {
    console.log(message);
  })
  .once('myevent', (message) => { //SOLO SE EJECUTA UNA VES AUN SE LLAME MAS VECES
    console.log('Se emite la primera ves');
  });

publicar.emit('myevent', 'Soy un emisor de eventos');
publicar.emit('myevent', 'Volviendo a emitir');
publicar.removeAllListeners('myevent'); //Se elimina el escuchar el evento yy hace que no se ejecute el de abajo
publicar.emit('myevent', 'Volviendo a emitir por tercera ves');