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

const logMyTripNumberOfMaxRunsReachedError = function () {
  $('#tempLogMyTripError').html('Are you crazy?!?!?  Please enter your actual number of runs.')
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

const updateMyTripNumberOfMaxRunsReachedError = function () {
  $('#tempUpdateMyTripError').html('Are you crazy?!?!?  Please enter your actual number of runs.')
}

module.exports = {
  logMyTripSuccess,
  logMyTripError,
  logMyTripFutureDateError,
  logMyTripNumberOfRunsNotANumberError,
  logMyTripNumberOfMaxRunsReachedError,
  updateMyTripSuccess,
  updateMyTripError,
  updateMyTripFutureDateError,
  updateMyTripNumberOfRunsNotANumberError,
  updateMyTripNumberOfMaxRunsReachedError
}
