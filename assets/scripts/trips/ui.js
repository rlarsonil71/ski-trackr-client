'use strict'
const store = require('../store')
const helpers = require('../templates/helpers/helpers')

const tripApi = require('./api')

const errorTextNoCurrentTrips = 'You have no current trips.  Please log a trip!'

const createTripSuccess = function () {
  console.log('(trips/ui.js) createTripSuccess ran!')
  // clear cart
  // store.cart = { products: [] }

  // Close LOG MY TRIP modal
  $('#myLogMyTripModal').modal('toggle')

  helpers.showAlert($('#alert-id'))
}

const createTripFailure = (error) => {
  console.log('(trips/ui.js) createTripFailure  Error is :', error)
  console.error(error)

  // Clear modal body text in LOG MY TRIP modal
  $('#log-my-trip').trigger('reset')
}

const indexTripsSuccess = function (ajaxResponse) {
  console.log('(trips/ui.js) indexTripsSuccess ran!  Data is :', ajaxResponse)

  const trips = ajaxResponse
  store.trips = trips

  console.log('(trips/ui.js) indexTripsSuccess - Number of trips:', trips.trips.length)

  $('#display-trips').html('')

  if (trips.trips.length === 0) {
    console.log('(trips/ui.js) No current trips for current user!')
    // No trips yet for current user - Display to user that there are no current
    //  trips.
    $('#view-trip-history-footer').html(errorTextNoCurrentTrips)
  } else {
    console.log('(trips/ui.js) Number of current trips for current user is: ', trips.trips.length)

    // Build handlebars HTML showing a display of all trips for current user

    // *** TBD ***

    // const displayAllTrips = require('../templates/display-view-trip-history.handlebars')
    // $('#display-trips').prepend(displayAllTrips(trips))
  }
}

const indexTripsFailure = (error) => {
  console.log('(trips/ui.js) indexTripsFailure  Error is :', error)
  console.error(error)
}

const updateTripRatingSuccess = function (ajaxResponse) {
  console.log('(trips/ui.js) updateTripRatingSuccess ran!  Data is :', ajaxResponse)

  // Show updated trip rating to user
  tripApi.indexTrips()
    .then(indexTripsSuccess)
    .catch(indexTripsFailure)
}

const updateTripRatingFailure = (error) => {
  console.log('(trips/ui.js) updateTripRatingFailure  Error is :', error)
  console.error(error)
}

const deleteTripSuccess = function (id) {
  event.preventDefault()

  // Remove deleted trip from rendering in view trip history
  $("div[data-id='" + id + "']").remove()
  console.log('(trips/ui.js) deleteTripSuccess ran! - ID: ', id)

  // *** TBD *** - Remove trip from Display All Trips display
}

const deleteTripFailure = (error) => {
  console.log('(trips/ui.js) deleteTripFailure  Error is :', error)
  console.error(error)
}

const showViewTripHistoryBtn = function () {
  console.log('(trips/ui.js) showViewTripHistoryBtn ran!')

  // Show View Trip History modal button after user signs in.
  $('#select-view-trip-history-btn').show()
}

const hideViewTripHistoryBtn = function () {
  console.log('(trips/ui.js) hideViewTripHistoryBtn ran!')

  // Hide View Trip History modal button initially until user signs in.
  $('#select-view-trip-history-btn').hide()
}

module.exports = {
  createTripSuccess,
  createTripFailure,
  indexTripsSuccess,
  indexTripsFailure,
  updateTripRatingSuccess,
  updateTripRatingFailure,
  deleteTripSuccess,
  deleteTripFailure,
  showViewTripHistoryBtn,
  hideViewTripHistoryBtn
}
