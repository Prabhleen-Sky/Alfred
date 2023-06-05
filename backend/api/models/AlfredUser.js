const mongoose = require('mongoose')

const alfredUserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        requried: true
    },
    email: {
        type: String,
        requried: true
    },
    password: {
        type: String,
        requried: true
    },
    newPassword: {
        type: String,
        requried: true
    },
    phoneNumber: {
        type: String,
    },
    city: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: ""
    },
    services: {
        type: Array,
        default: []
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('AlfredUser', alfredUserSchema)