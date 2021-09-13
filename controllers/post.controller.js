const Post = require("../models/post.model")

exports.createPost = async (req, res) => {
    const { type, username, text, backgroundColor, imageUrl, imageCaption } = req.body
    if (!type || !username) {
        return res.status(400).json({
            message: "Type or username is required",
        })
    }
    let post = {
        type,
        username,
    }

    if (type === "text") {
        post = {
            ...post,
            text,
            backgroundColor,
        }
    } else if (type === "image") {
        post = {
            ...post,
            imageUrl,
            imageCaption,
        }
    } else {
        return res.status(400).json({
            message: "Type must be either text or image.",
        })
    }

    const createdPost = await Post.create(post)
    return res.status(200).json({
        message: "Post created successfully",
        result: createdPost,
    })
}

exports.getAllPosts = async (req, res) => {
    const username = req.params.username
    const posts = await Post.find({ username })
    return res.status(200).json({
        result: posts,
    })
}

exports.getAllUsers = async (req, res) => {
    const users = await Post.find().select({ username: 1, type: 1 }).distinct("username")
    res.status(200).json({
        result: users,
    })
}

exports.deletePost = async (req, res) => {
    const postId = req.params.id
    const deletedPost = await Post.findByIdAndDelete(postId)
    return res.status(200).json({
        message: "Post deleted successfully",
        result: deletedPost,
    })
}
