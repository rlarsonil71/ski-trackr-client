'use strict'

const config = require('../config')
const store = require('../store')

const createTrip = (data) => {
  console.log('(trips/api.js) createTrip - data is ', data)

  // store.user is stored in scripts/auth/ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/trips/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    // data: data  (Same thing!)
    data
  })
}

const indexTrips = () => {
  console.log('(trips/api.js) indexTrips ran!')
  console.log('user id is: ', store.user.id)
  console.log('user token is: ', store.user.token)
  // store.user is stored in scripts/auth/ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/usertrips/' + store.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showTrip = (id) => {
  console.log('(trips/api.js) showTrip - ID: ', id)

  // store.user is stored in scripts/auth/ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/trips/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateTrip = (id, data) => {
  console.log('(trips/api.js) updateTrip - ID is: ', id)
  console.log('(trips/api.js) updateTrip - Data is: ', data)

  const trip = data

  // const trip = {
  //   trip: {
  //     resort: data
  //   }}

  console.log('(trips/api.js) updateTrip - Trip is: ', trip)
  console.log('(trips/api.js) updateTrip - User token is: ', store.user.token)

  // store.user is stored in scripts/auth/ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/trips/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: trip
  })
}

const deleteTrip = (id) => {
  console.log('(trips/api.js) deleteTrip - ID: ', id)

  // store.user is stored in scripts/auth/ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/trips/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createTrip,
  indexTrips,
  showTrip,
  updateTrip,
  deleteTrip
}
