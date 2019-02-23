const express = require('express')
const router = express.Router()

// GET /api/v1/tickets
router.get('/', (req, res) => {
    res.json([
        {
            id: 5,
            text : "test"
        }
    ])
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