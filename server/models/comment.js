let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Comment'

let schema = new Schema({
    imgUrl:{
        type: String
    },
    description:{
        type: String,
        required: true
    }
})


module.exports = mongoose.model(schemaName, schema)