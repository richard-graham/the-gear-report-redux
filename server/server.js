const path = require('path')
const express = require('express')
const server = express()

const ticketRoutes = require('./routes/tickets')

// serves up index.html to client, dirname and '..' are required for permissions
server.use(express.static(path.join(__dirname, '..', 'public')))
// pre parse inbound requests
server.use(express.json())

server.use('/api/v1/tickets', ticketRoutes)

module.exports = server 