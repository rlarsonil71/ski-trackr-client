'use strict'

const hideAlerts = () => {
  $('#alert-sign-in-id').hide()
  $('#alert-chg-pwd-id').hide()
  $('#alert-sign-out-id').hide()
  $('#alert-log-trip-on-signin-id').hide()
  $('#alert-new-trip-id').hide()
}

const showAlert = function (message) {
  hideAlerts()

  message.slideDown().delay(2000).slideUp()
}

module.exports = {
  showAlert,
  hideAlerts
}
