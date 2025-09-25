const mongoose = require('mongoose')
const { type } = require('os')

const Note = mongoose.model('Note', {
    note: {
        type : String
    }
})

module.exports = Note