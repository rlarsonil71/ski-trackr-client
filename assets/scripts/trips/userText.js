'static'

const logMyTripSuccess = function () {
  $('#tempLogMyTripError').html('')
}

const logMyTripError = function () {
  $('#tempLogMyTripError').html('All fields are required.  Please verify all fields are filled in.')
}

module.exports = {
  logMyTripSuccess,
  logMyTripError
}
