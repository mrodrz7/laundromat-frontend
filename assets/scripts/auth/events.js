'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// auth events below

const onSignUp = function (event) {
  event.preventDefault()
  // get form data
  const data = getFormFields(event.target)
  // make the api call
  api.signUp(data)
    .then(function (data) {
      ui.signUpSuccess(data)
    })
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  console.log(event)
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.onSignOutFailure)
}

// Dropoffs events below

const onGetDropoffs = (event) => {
  event.preventDefault()
  api.getDropoffs()
    .then(ui.getDropoffsSuccess)
    .catch(ui.failure)
}

// create form
const onCreateDropoffs = function (event) {
  // event.preventDefault()
  // const data = getFormFields(event.target).data()
  // api.createDropoffs(data)
  //   .then(ui.createDropoffsSuccess)
  //   .catch(ui.failure)
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.createDropoffs(data)
    .then(ui.createDropoffsSuccess)
    .catch(console.log)
}

// const onCreateShow = function (event) {
//   console.log(event)
//   event.preventDefault()
//   ui.createShowSuccess()
// }

const onClearDropoffs = (event) => {
  event.preventDefault()
  ui.clearDropoffs()
}

const onDeleteDropoff = (event) => {
  console.log(event)
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteDropoffs(id)
    .then(function () {
      onGetDropoffs(event)
    })
    .catch(ui.failure)
}

const onUpdateDropoffs = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.updateDropoffs(id)
    .then(function () {
      onGetDropoffs(event)
    })
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getDropoffsButton').on('click', onGetDropoffs)
  $('#clearDropoffsButton').on('click', onClearDropoffs)
  $('.content').on('click', '.delete-button', onDeleteDropoff)
  $('.content').on('click', '.edit-button', onUpdateDropoffs)
  $('#create-dropoffs').on('submit', onCreateDropoffs)
  // $('#create-dropoffs').on('click', onCreateShow)
}

// const data = { dropoffs: [...] }
// // dropoffs page template
// const dropoffsPageTemplate = require('../templates/dropoffs.handlebars')
// // give our template the data
// const dropoffsPageHtml = dropoffsPageTemplate({ dropoffs: data.dropoffs })
// // inject our compiled HTML into our webpage
// $('.content').append(dropoffsPageHtml)

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onGetDropoffs,
  onClearDropoffs,
  onDeleteDropoff,
  onUpdateDropoffs,
  onCreateDropoffs,
  addHandlers
  // onCreateShow
}
