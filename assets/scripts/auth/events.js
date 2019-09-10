'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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

// const onSignIn = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//
//   api.signIn(data)
//     .then(ui.signInSuccess)
//     .catch(ui.signInFailure)
// }
//
// const onChangePassword = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }
//
// const onSignOut = function (event) {
//   event.preventDefault()
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.onSignOutFailure)
// }

// const data = { dropoffs: [...] }
// // dropoffs page template
// const dropoffsPageTemplate = require('../templates/dropoffs.handlebars')
// // give our template the data
// const dropoffsPageHtml = dropoffsPageTemplate({ dropoffs: data.dropoffs })
// // inject our compiled HTML into our webpage
// $('.content').append(dropoffsPageHtml)

module.exports = {
  onSignUp
  // onSignIn,
  // onChangePassword,
  // onSignOut
}
