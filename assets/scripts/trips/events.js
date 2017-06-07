'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const tripApi = require('./api')
const tripUi = require('./ui')
const tripUserText = require('./userText')

const store = require('../store')

const onCreateTrip = function (events) {
  event.preventDefault()

  console.log('(trips/events.js) onCreateTrip ran!')

  const data = getFormFields(event.target)
  console.log('(trips/event.js) onCreatePlayer Data: ', data)

  const todayDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
  // This converts the string version of date to an actual date version for
  //  comparison to ensure a user cannot enter a trip AFTER today's date.
  const tripEnteredDate = new Date(data.trip.tripDate).toJSON().slice(0, 10).replace(/-/g, '/')

  if (tripEnteredDate > todayDate) { // Can't create a trip after TODAY
    // Display error text in LOG MY TRIP modal footer back to user to select a
    //  date that is today's date or a previous date.
    console.log('(trips/events.js) Invalid entered date! ' + tripEnteredDate + ' > ' + todayDate + ' (today)')
    tripUserText.logMyTripFutureDateError()
    return
  }

  // Set formatted trip entered date to data.trip.tripDate for rendering
  console.log('(trips/events.js) Trip Date: ' + data.trip.tripDate + ' Trip Entered Date: ' + tripEnteredDate)

  data.trip.tripDate = tripEnteredDate
  console.log('(trips/events.js) Trip Date: ', data.trip.tripDate)

  // Need to get FILLED IN `trip` object so that it can be passed to tripApi
  //  that will do a CREATE (POST) of that trip to the database

  // If the first character of ALL `trip` fields have data, create a new trip
  if ((data.trip.tripDate[0]) &&
    (data.trip.resort[0]) &&
    (data.trip.equipmentType[0]) &&
    (data.trip.conditions[0]) &&
    (data.trip.numberOfRuns[0]) &&
    (data.trip.favoriteRun[0]) &&
    (data.trip.comments[0])) {
    // Send AJAX POST call to create new trip
    tripUserText.logMyTripSuccess()
    tripApi.createTrip(data)
      .then(tripUi.createTripSuccess)
      .catch(tripUi.createTripFailure)
  } else {
    // Display error text in LOG MY TRIP modal footer back to user to fill in
    //  all input fields.
    tripUserText.logMyTripError()
  }
}

const onIndexTrips = function (event) {
  event.preventDefault()
  console.log('(trips/events.js) onIndexTrips ran!')

  // Display the Show-All-My-Trips-Modal
  // $('#myShowAllMyTripsModal').modal('toggle')

  // Don't need to use data object here!
  tripApi.indexTrips()
    .then(tripUi.indexTripsSuccess)
    .catch(tripUi.indexTripsFailure)
}

const onUpdateTripRating = function (event) {
  event.preventDefault()
  console.log('trips/events.js (onUpdateTrip)')

  const tripId = $(this).data('id')

  const rating = $('#rating' + tripId).val()

  console.log('trips/events.js (onUpdateTripRating) - ID is: ', tripId)
  console.log('trips/events.js (onUpdateTripRating) - Rating is: ', rating)

  tripApi.updateTrip(tripId, rating)
    .then(tripUi.updateTripRatingSuccess)
    .catch(tripUi.updateTripRatingFailure)
}

const onDeleteTrip = function (event) {
  event.preventDefault()
  console.log('(trips/events.js) onDeleteTrip ran!')

  const tripId = $(this).data('id')
  tripApi.deleteTrip(tripId)
    .then(tripUi.deleteTripSuccess(tripId))
    .catch(tripUi.deleteTripFailure)
}

// reset history modal?
const onHistoryClose = function (event) {
  event.preventDefault()
  console.log('modal history closed')
  store.trips = null
  $(this).removeData('bs.modal')
  $('#view-trip-history-footer').html(' ')
}

const showLogMyTripModal = function (event) {
  console.log('this should toggle log-my-trip modal')
  $('#myLogMyTripModal').modal('toggle')
}

const showAllMyTripsModal = function (event) {
  console.log('this should toggle show-all-my-trips modal')
  $('#myShowAllMyTripsModal').modal('toggle')
}

const addTripHandlers = () => {
  console.log('(trips/events.js) Setting click handlers')

  // Set up TRIP resource modal click event handlers
  $('#log-my-trip-modal').on('click', showLogMyTripModal)
  $('#show-all-my-trips-modal').on('click', showAllMyTripsModal)

  // Set up TRIP form submit event handler for Creating a New Trip
  $('#log-my-trip').on('submit', onCreateTrip)

  // Set up TRIP click event handler for Showing all My Trips
  $('#show-all-my-trips-modal').on('click', onIndexTrips)

  // *** TBD ***
  // Set up event handler for VIEW TRIP HISTORY
  //
  // $('#select-view-trip-history-btn').on('click', onIndexTrips)

  // Set up click event handler to Set New Rating in View Trip History
  $(document).on('click', '.setTripRatingBtn', onUpdateTripRating)

  // Set up click event handler to Delete Trip in View Trip History
  $(document).on('click', '.removeFromTripHistoryBtn', onDeleteTrip)

  // Clear View Trip History when modal is closed
  $(document).on('hidden.bs.modal', '#myViewTripHistoryModal', onHistoryClose)
}

module.exports = {
  addTripHandlers
}
