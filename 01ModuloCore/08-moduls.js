'use strict'

let myData = require('./my-data'),
    Clock  = require('./clock-esc5'),
    cucu = new Clock()

console.log(myData.name,
            myData.email
)

cucu.on('tictac', function(){
  cucu.theTime()
});