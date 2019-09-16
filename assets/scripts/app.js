'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const dropoffEvents = require('./auth/events.js')

$(() => {
  dropoffEvents.addHandlers()
  $('#create-dropoffs').hide()
  $('#update-dropoffs').hide()
  $('#getDropoffsButton').hide()
  $('#clearDropoffsButton').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').hide()
  $('#sign-out').hide()
})
