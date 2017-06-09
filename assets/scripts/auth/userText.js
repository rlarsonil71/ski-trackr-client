'static'

const signUpSuccess = function () {
  $('#tempSignUpError').html('')
  // Needed because previous sign-in error will still show without below code
  $('#tempSignInError').html('')
}

const signUpError = function () {
  $('#tempSignUpError').html("Passwords don't match, or email already taken")
}

const signInSuccess = function () {
  $('#tempSignInError').html('')
}

const signInError = function () {
  $('#tempSignInError').html("Wrong Email or Password. Sign up if you don't already have an account.")
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
