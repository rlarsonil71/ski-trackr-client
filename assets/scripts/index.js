'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const helpers = require('./templates/helpers/helpers')

const authEvents = require('./auth/events.js')
const tripEvents = require('./trips/events.js')

$(() => {
  setAPIOrigin(location, config)
  // Upon page load, hide all views except views passed in array to showView
  // View options are 'header-view' 'drawer-view' 'sign-in-view' 'sign-up-view' 'change-password-view'
  // console.log('Page loaded')
  authEvents.addHandlers()
  tripEvents.addTripHandlers()

  // Clear text from click event handlers for USER authentication
  $('#sign-up-modal').on('click', function () { $('#tempSignUpError').html('') })
  $('#sign-up-modal').on('click', function () { $('#sign-up').find('input:text, input:password, select, textarea').val('') })

  $('#sign-in-modal').on('click', function () { $('#tempSignInError').html('') })
  $('#sign-in-modal').on('click', function () { $('#sign-in').find('input:text, input:password, select, textarea').val('') })

  $('#chng-pw-modal').on('click', function () { $('#tempChangePasswordError').html('') })
  $('#chng-pw-modal').on('click', function () { $('#change-password').find('input:text, input:password, select, textarea').val('') })

  // Clear text from click event handlers for TRIP resource
  $('#log-my-trip-modal').on('click', function () { $('#tempLogMyTripError').html('') })
  $('#log-my-trip-modal').on('click', function () { $('#log-my-trip').find('input:text, select, textarea').val('') })

  // Upon page load, hide Change Password and Sign Out dropdown menu options
  $('#chng-pw-modal').hide()
  $('#sign-out-modal').hide()

  // Upon page load, show Sign Up and Sign In dropdown menu options
  $('#sign-up-modal').show()
  $('#sign-in-modal').show()

  // Upon page load, hide Trip dropdown modal
  $('#trip-dropdown-modal').hide()

  // Upon page load, hide Alert Id popup text messages
  helpers.hideAlerts()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
