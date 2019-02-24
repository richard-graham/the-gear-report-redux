const connection = require('./connection')

function getTickets(testDb) {
    const db = testDb || connection

    return db('tickets')
}

function createTicket(ticket, testDb) {
    const db = testDb || connection

    return db('tickets').insert(ticket)
}

function getTicketsByArea(areaId, testDb) {
    const db = testDb || connection

    return db('directory').where('areaId', areaId).then(area => {
        return db('tickets').where('area_id', user.id)
    })
    
} 

module.exports = {
    getTickets,
    createTicket,
    getTicketsByArea
}