'static'

const logMyTripSuccess = function () {
  $('#tempLogMyTripError').html('')
}

const logMyTripError = function () {
  $('#tempLogMyTripError').html('All fields are required.  Please verify all fields are filled in.')
}

const logMyTripFutureDateError = function () {
  $('#tempLogMyTripError').html("Invalid date selected.  Please select today's date or a previous date.")
}

module.exports = {
  logMyTripSuccess,
  logMyTripError,
  logMyTripFutureDateError
}
