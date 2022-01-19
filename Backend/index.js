const express = require('express')
const app = express()

let orders = [
  {
    order_id: 1,
    customer_id: 1,
    customer_name: "Carlos Alonso",
    gov_id: "A1",
    order_date: "17 1 2022",
    last_payment_date: "17 1 2022",
    order_status: true,
    shipping_info: "Bogota, Colombia, $30,000",
    totals: "$250,000",
    user_information: "carlos@sura.com, Sura"
  },
  {
    order_id: 2,
    customer_id: 2,
    customer_name: "Juan Gomez",
    gov_id: "A2",
    order_date: "5 1 2022",
    last_payment_date: "5 1 2022",
    order_status: true,
    shipping_info: "Medellin, Colombia, $25,000",
    totals: "$300,000",
    user_information: "juan@bancolombia.com, Bancolombia"
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Welcome to Order Creation System!</h1>')
})

app.get('/orders', (request, response) => {
  response.json(orders)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})