const express = require('express')
const router = require('./routes/router')
const path = require('path')
const server = express()

// http://localhost:1995 => root route
const PORT = process.env.PORT || 1995

// middleware
server.use(express.static(path.join(__dirname, 'public')))
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views/pages'))

// main router
server.use('/', router)



server.listen(PORT,()=> console.log(`Server is running at http://localhost:${PORT}`))