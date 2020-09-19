(function(d, io, $){
  'use strict'

  var io = io()

  $('#chat-form').on('submit', (e) => {
    e.preventDefault()
    io.emit('new message', $('#message-text').val() )
    $('#message-text').val(null)
    return false
  })

  io.on('new user', (newUser) => {
    alert(newUser.message)
  })

  io.on('user says', (userSays) => {
    $('#chat').append('<li>' + userSays + '</li>')
  })

  io.on('disconnect', (disco) => {
    alert(disco.message)
  })
})(document, io, jQuery)