const express = require('express')
const port = 3500
const app  = express()


// Implementando metodo get
app.get('/hello/:username', (req, res) => {
    console.log(typeof req.params.username)
    res.send(`Hello ${req.params.username.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res) => {
    const {x, y} = req.params
    res.end(`Result: ${ parseInt(x) + parseInt(y)}`)
})

app.get('/users/:username/photo', (req, res) => {
    if (req.params.username.toUpperCase() === 'JORGE') {
        return res.sendFile('./img/jorge.png', {
            root: __dirname
        
        })
    }

    res.sendStatus('El usuario no tiene acceso....!!!')
})

app.get('/name/:name/age/:age', (req, res) => {
    res.send(`El usario ${ req.params.name } tiene ${ req.params.age } años...!!!`)
})

app.listen(port)
console.log('Server on port ${port}')

