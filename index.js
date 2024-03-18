const express = require('express')
const app = express()
const routes = require('./rutas.js')
const port = 3000

app.use(routes)

app.listen(port, () => [
    console.log('Server on port ${3000}')
])
