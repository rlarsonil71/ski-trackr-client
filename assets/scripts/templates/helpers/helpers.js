'use strict'
// const store = require('../store')

const hideAlerts = () => {
  $('#alert-id').hide()
}

const showAlert = function (message) {
  hideAlerts()

  message.slideDown().delay(800).slideUp()
}

module.exports = {
  showAlert
}
