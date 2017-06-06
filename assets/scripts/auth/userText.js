'static'

const signUpSuccess = function () {
  $('#tempSignUpError').html('')
  // $('#mySignUpModal').modal('toggle')
  // $('#mySignInModal').modal('toggle')
  // Needed because previous sign-in error will still show without below code
  $('#tempSignInError').html('')
  // $('#sign-in').find('input:text, input:password, select, textarea').val('')
}

const signUpError = function () {
  $('#tempSignUpError').html("Passwords don't match, or email already taken")
}

const signInSuccess = function () {
  // $('#mySignInModal').modal('toggle')
  $('#tempSignInError').html('')
  // $('.init').hide()
  // $('#sign-up-modal').hide()
  // $('#sign-in-modal').hide()
  // $('#sign-out').show()
  // $('#chng-pw-modal').show()
  // $('#new-game-wrapper').show()
  // $('#toggleHist').val('Player X Game History')
  // $('.user-signed-in').html(store.user.email)
}

const signInError = function () {
  $('#tempSignInError').html("Wrong Email or Password. Sign up if you don't already have an account")
}

// const signOutSuccess = function () {
//
// }

const changePasswordSuccess = function () {
  // Close CHANGE PASSWORD modal
  $('#myPwChangeModal').modal('toggle')
}

const changePasswordError = function () {
  $('#tempChangePasswordError').html('Incorrect Old Password. Please try again.')
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError
}
