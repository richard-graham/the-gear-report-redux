const express = require('express')
const router = express.Router()
const {getTickets} = require('../db/tickets')

// GET /api/v1/tickets
router.get('/', (req, res) => {
    getTickets()
    .then(tickets => {
        res.json(tickets)
    })
    .catch(err => {
        console.log(err)
        res.setStatus(500).json({error: 'Something went wrong'})
    })
}) 

// POST /api/v1/tickets

router.post('/', (req, res) => {
    res.json({ id: 6 })
})

// POST /api/v1/:locationId?

router.get('/:locationId', (req, res) => {
    res.json([
        {
            id: 5,
            text: 'This is a ticket'
        }
    ])
})

module.exports = router