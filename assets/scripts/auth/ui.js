'use strict'

const store = require('../store')
const helpers = require('../templates/helpers/helpers')

// const productEvents = require('../products/events.js')
// const orderUi = require('../orders/ui.js')
const authUserText = require('./userText')

const signUpSuccess = (ajaxResponse) => {
  console.log('(auth/ui.js) signUpSuccess ran!  Data is :', ajaxResponse)

  // Clear modal body text in SIGN UP modal
  $('#sign-up').trigger('reset')

  // Close SIGN UP and SIGN IN modals
  $('#mySignUpModal').modal('toggle')
  $('#mySignInModal').modal('toggle')
}

const signUpFailure = (error) => {
  console.log('(auth/ui.js) Sign-up failure! Error is :', error)
  console.error(error)

  // Clear modal body text in SIGN UP modal
  $('#sign-up').trigger('reset')
}

const signInSuccess = (ajaxResponse) => {
  // store.cart = { products: [] }

  // Upon successful SIGN IN, show Change Password and Sign Out dropdown menu options
  $('#chng-pw-modal').show()
  $('#sign-out-modal').show()

  // Upon successful SIGN IN, hide Sign Up and Sign In dropdown menu options
  $('#sign-up-modal').hide()
  $('#sign-in-modal').hide()

  // Upon successful SIGN IN, show Trip dropdown modal
  $('#trip-dropdown-modal').show()

  console.log('(auth/ui.js) signInSuccess ran!  Data is :', ajaxResponse)

  // Close SIGN IN modal
  $('#mySignInModal').modal('toggle')

  // Store user object
  store.user = ajaxResponse.user
  console.log('ui.js: signInSuccess - store is: ', store)

  // const products = store.products

  // Clear modal body text in SIGN IN modal
  $('#sign-in').trigger('reset')

  // Show user alert that the user has successfully signed in.
  helpers.showAlert($('#alert-sign-in-id'))

  // Show View Order History modal button since user signed in
  // orderUi.showViewOrderHistoryBtn()
}

const signInFailure = (error) => {
  console.log('(auth/ui.js) Sign-in failure!  Error is :', error)
  console.error(error)

  // Clear modal body text in SIGN IN modal
  $('#sign-in').trigger('reset')

  // Tell user that there is an error
  authUserText.signInError()
}

const changePasswordSuccess = (ajaxResponse) => {
  console.log('(auth/ui.js) Password successfully changed')

  // Clear modal body text in CHANGE PASSWORD modal
  $('#change-password').trigger('reset')

  // Tell user that password was successfully changed
  authUserText.changePasswordSuccess()
  // Show user alert that the user has successfully signed in.
  helpers.showAlert($('#alert-chg-pwd-id'))
}

const changePasswordFailure = (error) => {
  console.log('(auth/ui.js) Change-Password failure!  Error is :', error)
  console.error(error)

  // Clear modal body text in CHANGE PASSWORD modal
  $('#change-password').trigger('reset')

  // Tell user that there is an error
  authUserText.changePasswordError()
}

const signOutSuccess = () => {
  // Upon successful SIGN OUT, show Sign Up and Sign In dropdown menu options
  $('#sign-up-modal').show()
  $('#sign-in-modal').show()

  // Upon successful SIGN OUT, hide Change Password and Sign Out dropdown menu options
  $('#chng-pw-modal').hide()
  $('#sign-out-modal').hide()

  // Upon successful SIGN OUT, hide Trip dropdown modal
  $('#trip-dropdown-modal').hide()

  console.log('(auth/ui.js) signOutSuccess ran!  Nothing was returned')

  // clear cart
  // store.cart = null

  // Clear user
  store.user = null
  console.log('store is: ', store)

  // Show user alert that the user has successfully signed out.
  helpers.showAlert($('#alert-sign-out-id'))

  // On sign out, show all products without the `Add to Cart` button for each
  //  product.
  // productEvents.onGetAllProducts()

  // On sign out, hide View Order History modal button
  // orderUi.hideViewOrderHistoryBtn()
}

const signOutFailure = (error) => {
  console.log('(auth/ui.js) Sign-out failure!  Error is :', error)
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
