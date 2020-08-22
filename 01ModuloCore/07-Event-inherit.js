//https://nodejs.org/api/util.html#util_util_inherits_constructor_superconstructor
'use strict';

let EventEmitter = require('events').EventEmitter,
    inherits = require('util').inherits;

const Clock = function(){
  let self = this;

  setInterval(() => {
    //console.log('Hola');
    self.emit('tictac')
  }, 1000);
}

inherits(Clock, EventEmitter);
Clock.prototype.theTime = function(){
  const date = new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        msg = hrs + ":" + min + ":" + sec
    
  console.log(msg);
}

let cucu = new Clock()
cucu.on('tictac', function(){
  cucu.theTime()
});