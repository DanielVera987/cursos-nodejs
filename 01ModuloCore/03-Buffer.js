/*
Buffers 
  Una tira de bytes (datos binarios)
  Similar a un array de enteros
  Tamaño fijo
  Manipular datos directamente
    Sockets
    Streams
    Implementar protocolos complejos
    Manipulacion de firecho/Imaganes
    Criptografias
*/

'use strict';

let buf = new Buffer(100),
    buf2 = new Buffer(26),
    str = '\u00bd + \u00bc = \u00be';

buf.write('abcd', 0, 4, 'ascii');
console.log(
  buf,
  buf.toString('ascii'),
  str,
  str.length,
  Buffer.byteLength(str, 'utf8')
);
let i = 0;
for(i in buf2.length)
{
  buf2[i] = i + 97
}