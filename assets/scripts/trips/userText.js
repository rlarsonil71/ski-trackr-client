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

const logMyTripNumberOfRunsNotANumberError = function () {
  $('#tempLogMyTripError').html('Number of Runs field is not a number.  Please enter a number.')
}

const updateMyTripSuccess = function () {
  $('#tempUpdateMyTripError').html('')
}

const updateMyTripError = function () {
  $('#tempUpdateMyTripError').html('All fields are required.  Please verify all fields are filled in.')
}

const updateMyTripFutureDateError = function () {
  $('#tempUpdateMyTripError').html("Invalid date selected.  Please select today's date or a previous date.")
}

const updateMyTripNumberOfRunsNotANumberError = function () {
  $('#tempUpdateMyTripError').html('Number of Runs field is not a number.  Please enter a number.')
}

module.exports = {
  logMyTripSuccess,
  logMyTripError,
  logMyTripFutureDateError,
  logMyTripNumberOfRunsNotANumberError,
  updateMyTripSuccess,
  updateMyTripError,
  updateMyTripFutureDateError,
  updateMyTripNumberOfRunsNotANumberError
}
