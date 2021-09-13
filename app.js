const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = 5000
const cors = require("cors")
const postRouter = require("./routes/post.routes")

app.use(cors())
app.use(express.json())
app.use(postRouter)

const uri = "mongodb://localhost:27017/whatsapp_status"
mongoose
    .connect(uri)
    .then(() => console.log("database connected successfully"))
    .catch((err) => console.log("error in connecting database", err))

app.listen(PORT, () => console.log("server listening at port: " + PORT))
