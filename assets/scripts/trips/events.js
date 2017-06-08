'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const tripApi = require('./api')
const tripUi = require('./ui')
const tripUserText = require('./userText')

const store = require('../store')

const onCreateTrip = function (event) {
  event.preventDefault()

  console.log('(trips/events.js) onCreateTrip ran!')

  const data = getFormFields(event.target)
  console.log('(trips/events.js) onCreatePlayer Data: ', data)

  // Need to get FILLED IN `trip` object so that it can be passed to tripApi
  //  that will do a CREATE (POST) of that trip to the database

  // If the first character of ALL `trip` fields have data, check for valid entered date
  if ((data.trip.tripDate[0]) &&
    (data.trip.resort[0]) &&
    (data.trip.equipmentType[0]) &&
    (data.trip.conditions[0]) &&
    (data.trip.numberOfRuns[0]) &&
    (data.trip.favoriteRun[0]) &&
    (data.trip.comments[0])) {
    console.log('(trips/events.js) onCreateTrip - All data entered!')

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

    tripUserText.logMyTripSuccess()

    // Send AJAX POST call to create new trip
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

const onUpdateTrip = function (tripId) {
  // event.preventDefault()
  console.log('(trips/events.js) onUpdateTrip ran!')

  // Get trip data from API for passed in (user selected) `tripId`
  // If successful, tripUi.showTripSuccess function will be called which will
  //  display the Update-My-Trip modal populated with data for (user selected)
  //  `tripId`
  // The tripUi.showTripSuccess function will then allow the user to update
  //  about the user selected trip followed by updating the trip on the backend.
  tripApi.showTrip(tripId)
    .then(tripUi.showTripSuccess)
    .catch(tripUi.showTripFailure)
}

const onSaveUpdatedTrip = function (event) {
  event.preventDefault()
  // console.log('(trips/events.js) onSaveUpdatedTrip')

  const tripId = store.trip.id
  const data = getFormFields(event.target)

  console.log('(trips/events.js) onSaveUpdatedTrip - Trip ID is: ', tripId)
  console.log('(trips/events.js) onSaveUpdatedTrip - Data is: ', data)

  // If the first character of ALL `trip` fields have data, check for valid entered date
  if ((data.trip.tripDate[0]) &&
    (data.trip.resort[0]) &&
    (data.trip.equipmentType[0]) &&
    (data.trip.conditions[0]) &&
    (data.trip.numberOfRuns[0]) &&
    (data.trip.favoriteRun[0]) &&
    (data.trip.comments[0])) {
    console.log('(trips/events.js) onSaveUpdatedTrip - All data entered!')

    const todayDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
    // This converts the string version of date to an actual date version for
    //  comparison to ensure a user cannot enter a trip AFTER today's date.
    const tripEnteredDate = new Date(data.trip.tripDate).toJSON().slice(0, 10).replace(/-/g, '/')

    if (tripEnteredDate > todayDate) { // Can't create a trip after TODAY
      // Display error text in LOG MY TRIP modal footer back to user to select a
      //  date that is today's date or a previous date.
      console.log('(trips/events.js) onSaveUpdatedTrip - Invalid entered date! ' + tripEnteredDate + ' > ' + todayDate + ' (today)')
      tripUserText.updateMyTripFutureDateError()
      return
    }

    // Set formatted trip entered date to data.trip.tripDate for rendering
    console.log('(trips/events.js) Trip Date: ' + data.trip.tripDate + ' Trip Entered Date: ' + tripEnteredDate)

    data.trip.tripDate = tripEnteredDate
    console.log('(trips/events.js) Trip Date: ', data.trip.tripDate)

    tripUserText.updateMyTripSuccess()

    console.log('(trips/events.js) onSaveUpdatedTrip - Ready to call UPDATE AJAX PATCH for trip!')

    // *** TBD *** THIS IS THE CALL TO UPDATE PATCH!!!!!!!!!!!!!!!!!

    // Send AJAX PATCH call to update current trip
    // tripApi.updateTrip(tripId, data)
    //   .then(tripUi.updateTripSuccess)
    //   .catch(tripUi.updateTripFailure)
  } else {
    // Display error text in UPDATE MY TRIP modal footer back to user to fill in
    //  all input fields.
    tripUserText.updateMyTripError()
  }
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
  $('#tempLogMyTripError').html('')
  $('#myLogMyTripModal').modal('toggle')
}

const showAllMyTripsModal = function (event) {
  console.log('this should toggle show-all-my-trips modal')
  $('#myShowAllMyTripsModal').modal('toggle')
}

const showUpdateMyTripModal = function (event) {
  // Hide Show-All-My-Trips modal
  showAllMyTripsModal()

  console.log('this should toggle update-my-trip modal')
  $('#tempUpdateMyTripError').html('')
  $('#myUpdateMyTripModal').modal('toggle')

  // const tripId = $(this).data('id')  --- SAME as event.target.id
  const tripId = event.target.id
  console.log('(trips/events.js) showUpdateMyTripModal - ID is: ', tripId)

  // Show Update My Trip modal to have user update data about selected trip
  onUpdateTrip(tripId)
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

  // Set up click event handler to show Update My Trip modal
  // Need to use `document` as the `.setUpdateTripBtn` selector is built using
  //  handlebars.
  $(document).on('click', '.setUpdateTripBtn', showUpdateMyTripModal)

  // Set up TRIP form submit event handler for Updating an Existing Trip
  // Need to use `document` as the `#update-my-trip` selector is built using
  //  handlebars.
  $(document).on('submit', '#update-my-trip', onSaveUpdatedTrip)

  // Set up click event handler to Delete Trip in Show All My Trips modal
  // Need to use `document` as the `.removeTripFromMyTripListBtn` selector is
  //  built using handlebars.
  $(document).on('click', '.removeTripFromMyTripListBtn', onDeleteTrip)

  // Clear View Trip History when modal is closed
  // Need to use `document` as the `#myViewTripHistoryModal` selector is
  //  built using handlebars.
  $(document).on('hidden.bs.modal', '#myViewTripHistoryModal', onHistoryClose)
}

module.exports = {
  addTripHandlers,
  onSaveUpdatedTrip
}
