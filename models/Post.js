const mongoose = require('mongoose');
const softDeleteMiddleware = require("../middlewares/softDeleteMiddleware")


const {Schema} = mongoose

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    }
}, {
    timestamps: true
})

postSchema.plugin(softDeleteMiddleware);

module.exports = new mongoose.model("post", postSchema) 
