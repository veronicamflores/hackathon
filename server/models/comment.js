let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Comment'

let schema = new Schema({
    imgUrl:{
        type: String
    },
    description:{
        type: String,
        required: true
    },
    postId:{
        type:ObjectId,
        ref: 'Post',
        required: true

    },
    userId:{
        type: ObjectId,
        ref: 'User',
        required: true
    }
})


module.exports = mongoose.model(schemaName, schema)