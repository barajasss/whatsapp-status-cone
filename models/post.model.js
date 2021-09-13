const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema(
    {
        type: {
            type: String,
            enum: ["text", "image"],
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        text: {
            type: String,
        },
        backgroundColor: {
            type: String,
            default: "lightgreen",
        },
        imageUrl: {
            type: String,
        },
        imageCaption: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

const Post = mongoose.model("Post", postSchema)

module.exports = Post
