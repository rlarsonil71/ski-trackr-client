'use strict'

const store = require('../store')

const order = function () {
  // console.log('store.cart is', store.cart)
  const order = {order: {}}
  order.order.orderDate = new Date()
  order.order.items = []
  // order.items.unshift({name: 'apple', price: 100, qty: 2})
  // for(let i = 0; i < store.cart)
  // console.log('length of cart is', store.cart.products.length)
  let total = 0
  for (let i = 0; i < store.cart.products.length; i++) {
    const name = store.cart.products[i].name
    const price = store.cart.products[i].price
    const qty = store.cart.products[i].quanitity
    const item = {}
    item.name = name
    item.price = price
    item.qty = qty
    order.order.items.unshift(item)
    total = total + price
  }
  order.order.total = total
  // order.order.rating = 0
  order.order._owner = store.user.id
  // console.log('order is', order)
  return order
}

module.exports = {
  order
}

// order: {
//   orderDate: '2017-08-09',
//   items: [
//     {name: 'apple', price: 100, qty: 2}, {name: 'orange', price: 200, qty: 1},
//     {name: 'banana', price: 300, qty: 1}
//   ],
//   total: 600,
//   _owner: '591b52a843751e17c229471a'
// }
// }
