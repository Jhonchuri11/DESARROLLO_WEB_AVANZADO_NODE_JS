const express = require('express')
const port = 3500
const app  = express()

// Implementando metodo get
app.get('/', (req, res) => {
    res.send('Hola mundo con JWCA')
})
// Implementando metodo get
app.get('/myfile', (req, res) => {
    res.sendFile('./img/tecsup.jpeg', {
        root: __dirname
    })
})

// Implementando metodo get
app.get('/user', (req, res) => {
    res.json({
        nombres:"Jhon",
        apellidos:"Churivanti Alva",
        edad: 20,
        points: [1,2,3],
        adress: {
            ciudad: "Lima - Peru",
            distrito: "Santa Anita",
            calle: "Los Cedros 14"
        }
    })
})

// Verificando el estado

app.get('/isAlive', (req, res) => {
    res.sendStatus(204)
})

app.listen(port)
console.log('Server on port ${port}')