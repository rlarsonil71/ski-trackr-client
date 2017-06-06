'use strict'

const config = require('../config')
const store = require('../store')

const signUp = (data) => {
  console.log('auth/api.js (signUp) - (data is ', data)

  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    // data: data  (Same thing!)
    data
  })
}

const signIn = (data) => {
  console.log('auth/api.js (signIn) - (data is ', data)

  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    // data: data  (Same thing!)
    data
  })
}

const changePassword = (data) => {
  console.log('auth/api.js (changePassword) - (data is ', data)

  // store.user is stored in auth/ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
      // AJAX or RAILS doesn't know what to do with 2nd header below
      // Content-Type: application/json
    },
    data
  })
}

const signOut = () => {
  console.log('auth/api.js (signOut)')

  // store.user is stored in ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
