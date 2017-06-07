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
  console.log('(trips/api.js) indexTrips')
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

const updateTrip = (id, data) => {
  console.log('(trips/api.js) updateTrip - ID is: ', id)
  console.log('(trips/api.js) updateTrip - Data is: ', data)

  const trip = {
    trip: {
      rating: data
    }}

  // const trip = {
  //   tripDate: '2017-08-09',
  //   rating: 5,
  //   items: [
  //     {name: 'apple', price: 100, qty: 2}, {name: 'orange', price: 200, qty: 1},
  //     {name: 'banana', price: 300, qty: 1}
  //   ],
  //   total: 600,
  //   _owner: '591e34670cbe10e1f3e1e6eb'
  // }

  // trip.trip.rating = data

  // const data1 = trip

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
  updateTrip,
  deleteTrip
}
