'use strict'

const hideAlerts = () => {
  $('#alert-sign-in-id').hide()
  $('#alert-sign-out-id').hide()
  $('#alert-new-trip-id').hide()
}

const showAlert = function (message) {
  hideAlerts()

  message.slideDown().delay(800).slideUp()
}

module.exports = {
  showAlert,
  hideAlerts
}
