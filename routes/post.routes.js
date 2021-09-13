const express = require("express")
const router = express.Router()
const postController = require("../controllers/post.controller")

router.get("/users", postController.getAllUsers)
router.post("/posts", postController.createPost)
router.get("/posts/:username", postController.getAllPosts)
router.delete("/posts/:id", postController.deletePost)

module.exports = router
