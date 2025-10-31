const express = require('express')
const axios = require('axios')
const router = require('./routes/api/router')
const path = require('path')

const server = express()
// http://localhost:1995 => root route
const PORT = process.env.PORT || 1995

server.use(express.static(path.join(__dirname, 'public')))

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views/pages'))

server.use('/', router)

// handle error when trying to reach http://localhost:1995/foo
server.use((req, res) => {
    res.status(404).render('404', {
        title: '404 Not Found',
        message: `Oops! The page "${req.originalUrl}" doesn't exist.`
    })
})


server.listen(PORT,()=> console.log(`Server is running at http://localhost:${PORT}`))