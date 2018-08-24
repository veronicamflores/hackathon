let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Post'

let schema = new Schema({
    imgUrl:{
        type: String
    },
    description:{
        type: String,
        required: true
    },
    userId:{
        type: ObjectId,
        ref: 'User',
        required: true
    }
})


module.exports = mongoose.model(schemaName, schema)