'use strict'

const store = require('../store')
const helpers = require('../templates/helpers/helpers')

const showUpdateMyTripTemplate = require('../templates/update-my-trip.handlebars')

// const tripApi = require('./api')

const errorTextNoCurrentTrips = 'You have no current trips.  Please log a trip!'

const createTripSuccess = function () {
  // console.log('(trips/ui.js) createTripSuccess ran!')

  // Close LOG MY TRIP modal
  $('#myLogMyTripModal').modal('toggle')

  // Clear modal body form text in LOG MY TRIP modal
  $('#log-my-trip').trigger('reset')

  // Show user alert that a new trip was successfully logged.
  helpers.showAlert($('#alert-new-trip-id'))
}

const createTripFailure = (error) => {
  // console.log('(trips/ui.js) createTripFailure  Error is :', error)
  console.error(error)

  // Clear modal body text in LOG MY TRIP modal
  $('#log-my-trip').trigger('reset')
}

const indexTripsSuccess = function (ajaxResponse) {
  // console.log('(trips/ui.js) indexTripsSuccess ran!  Data is :', ajaxResponse)

  const trips = ajaxResponse
  store.trips = trips

  // console.log('(trips/ui.js) indexTripsSuccess - Number of trips:', trips.trips.length)

  $('#display-trips').html('')

  if (trips.trips.length === 0) {
    // console.log('(trips/ui.js) No current trips for current user!')
    // No trips yet for current user - Display to user that there are no current
    //  trips.
    $('#view-trip-history-footer').html(errorTextNoCurrentTrips)
  } else {
    // console.log('(trips/ui.js) Number of current trips for current user is: ', trips.trips.length)

    // Build handlebars HTML showing a display of all trips for current user
    // Sort trips by tripDate so they are always in the same order.
    trips.trips.sort(function (a, b) {
      return a.resort - b.resort
    })
    const displayAllTrips = require('../templates/display-all-my-trips.handlebars')
    $('#display-trips').prepend(displayAllTrips(trips))
  }
}

const indexTripsFailure = (error) => {
  // console.log('(trips/ui.js) indexTripsFailure  Error is :', error)
  console.error(error)
}

const showTripSuccess = function (ajaxResponse) {
  // event.preventDefault()

  // console.log('(trips/ui.js) showTripSuccess ran! - Data is :', ajaxResponse)

  // Store returned trip object
  store.trip = ajaxResponse.trip

  const tripId = ajaxResponse.trip.id

  // console.log('(trips/ui.js) showTripSuccess - Selected Trip is: ', ajaxResponse.trip)
  // console.log('(trips/ui.js) showTripSuccess - Trip ID is: ', tripId)

  // Clear handlebars-update-my-trip-form content
  $('#handlebars-update-my-trip-form').empty()

  // Build handlebars HTML showing UPDATE FORM to have current user update data
  //  about selected trip

  const showUpdateMyTripHtml = showUpdateMyTripTemplate({ trip: ajaxResponse.trip })
  $('#handlebars-update-my-trip-form').html(showUpdateMyTripHtml)
}

const showTripFailure = (error) => {
  // console.log('(trips/ui.js) showTripFailure  Error is :', error)
  console.error(error)
}

const updateTripSuccess = function () {
  // console.log('(trips/ui.js) updateTripSuccess ran!')

  // Hide Update-My-Trip modal
  $('#tempUpdateMyTripError').html('')
  $('#myUpdateMyTripModal').modal('toggle')

  // Show user alert that the current trip was successfully updated.
  helpers.showAlert($('#alert-update-trip-id'))
}

const updateTripFailure = (error) => {
  // console.log('(trips/ui.js) updateTripRatingFailure  Error is :', error)
  console.error(error)
}

const deleteTripSuccess = function (id) {
  event.preventDefault()

  // Remove deleted trip from rendering in view trip history
  $("div[data-id='" + id + "']").remove()
  // console.log('(trips/ui.js) deleteTripSuccess ran! - ID: ', id)
}

const deleteTripFailure = (error) => {
  // console.log('(trips/ui.js) deleteTripFailure  Error is :', error)
  console.error(error)
}

const showViewTripHistoryBtn = function () {
  // console.log('(trips/ui.js) showViewTripHistoryBtn ran!')

  // Show View Trip History modal button after user signs in.
  $('#select-view-trip-history-btn').show()
}

const hideViewTripHistoryBtn = function () {
  // console.log('(trips/ui.js) hideViewTripHistoryBtn ran!')

  // Hide View Trip History modal button initially until user signs in.
  $('#select-view-trip-history-btn').hide()
}

module.exports = {
  createTripSuccess,
  createTripFailure,
  indexTripsSuccess,
  indexTripsFailure,
  showTripSuccess,
  showTripFailure,
  updateTripSuccess,
  updateTripFailure,
  deleteTripSuccess,
  deleteTripFailure,
  showViewTripHistoryBtn,
  hideViewTripHistoryBtn
}
