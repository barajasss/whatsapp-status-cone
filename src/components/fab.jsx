import React, { useState } from "react"
import Modal from "./modal"
import { useDispatch } from "react-redux"
import { POST_TYPES } from "../utils/post"
import { createPost } from "../redux/post.actions"

export default function Fab() {
    const [modalVisible, setModalVisible] = useState(false)
    const [postType, setPostType] = useState(POST_TYPES.TEXT)
    const [username, setUsername] = useState("")
    const [text, setText] = useState("")
    const [background, setBackground] = useState("yellow")
    const [imageUrl, setImageUrl] = useState("")
    const [imageCaption, setImageCaption] = useState("")
    const dispatch = useDispatch()

    const clearFormValues = () => {
        setUsername("")
        setText("")
        setImageUrl("")
    }

    const openTextModal = () => {
        clearFormValues()
        setPostType(POST_TYPES.TEXT)
        setModalVisible(true)
    }
    const openImageModal = () => {
        clearFormValues()
        setPostType(POST_TYPES.IMAGE)
        setModalVisible(true)
    }
    const savePost = async () => {
        console.log("The form values are")
        console.log(username, text, background, imageUrl)
        let allowedToSave = false
        if (postType === POST_TYPES.TEXT) {
            if (username && text && background) {
                allowedToSave = true
            }
        } else if (postType === POST_TYPES.IMAGE) {
            if (username && imageUrl && imageCaption) {
                allowedToSave = true
            }
        }

        if (allowedToSave) {
            // add fetch requests to save the post
            const post = {
                type: postType,
                username: username,
                backgroundColor: background,
                text: text,
                imageUrl: imageUrl,
                imageCaption: imageCaption,
            }
            await dispatch(createPost(post))
            setModalVisible(false)
        }
    }

    return (
        <div className="fab">
            <Modal visible={modalVisible}>
                <div className="title">Create {postType} Post</div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {postType === POST_TYPES.TEXT ? (
                    <>
                        <input
                            type="text"
                            value={text}
                            placeholder="Post Text..."
                            onChange={(e) => setText(e.target.value)}
                        />
                        <select value={background} onChange={(e) => setBackground(e.target.value)}>
                            <option value="skyblue">Sky Blue</option>
                            <option value="yellow">Yellow</option>
                            <option value="red">Red</option>
                            <option value="lightgreen">Light Green</option>
                            <option value="orange">Orange</option>
                        </select>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            value={imageUrl}
                            placeholder="Image url..."
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                        <input
                            type="text"
                            value={imageCaption}
                            placeholder="Image caption..."
                            onChange={(e) => setImageCaption(e.target.value)}
                        />
                    </>
                )}
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button onClick={() => setModalVisible(false)}>Cancel</button>
                    <button onClick={savePost}>Save</button>
                </div>
            </Modal>
            <span class="material-icons" onClick={openTextModal}>
                edit
            </span>
            <span class="material-icons" onClick={openImageModal}>
                image
            </span>
        </div>
    )
}
