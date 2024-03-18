const router = require('express').Router()

router.get('/about', (req, res) => {
    res.sendFile('./static/about.html', {
        root:__dirname
    })
})

router.get('/contact', (req, res) => {
    res.sendFile('./static/contact.html',{
        root:__dirname
    })
})

router.get('/', (req, res) => {
    res.sendFile('./static/index.html',{
        root:__dirname
    })
})

module.exports = router