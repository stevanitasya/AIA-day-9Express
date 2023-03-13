const express = require('express')
const app = express()
const products = require('./data.js')
const products_routes = require('./routes/products.js')

app.listen(8000, () => {
    console.log('server is listening on port 8000')
})

app.use(express.json())
app.use('/api/products', products_routes)