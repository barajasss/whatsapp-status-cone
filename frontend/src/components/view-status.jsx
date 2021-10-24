import React, { useState, useEffect } from "react"
import { fetchPosts, setActiveUsername, deletePost } from "../redux/post.actions"
import { useSelector, useDispatch } from "react-redux"
import StatusPost from "./status-post"

export default function ViewStatus() {
    const dispatch = useDispatch()
    const activeUsername = useSelector((state) => state.post.activeUsername)
    const posts = useSelector((state) => state.post.posts)
    const [activePostIndex, setActivePostIndex] = useState(0)

    const updateIndex = (index) => {
        if (index < 0) {
            index = posts.length - 1
        } else if (index >= posts.length) {
            index = 0
        }
        setActivePostIndex(index)
    }

    useEffect(() => {
        dispatch(fetchPosts())
        setActivePostIndex(0)
    }, [activeUsername])
    return (
        <div className="view-status">
            <span
                className="close material-icons"
                onClick={() => {
                    dispatch(setActiveUsername(null))
                }}
            >
                close
            </span>
            {posts.length > 1 && (
                <>
                    <span
                        className="material-icons arrow-left"
                        onClick={() => {
                            updateIndex(activePostIndex - 1)
                        }}
                    >
                        chevron_left
                    </span>
                    <span
                        className="material-icons arrow-right"
                        onClick={() => {
                            updateIndex(activePostIndex + 1)
                        }}
                    >
                        chevron_right
                    </span>
                </>
            )}
            <span
                className="material-icons delete"
                onClick={async () => {
                    await dispatch(deletePost(posts[activePostIndex]))
                    if (posts.length > 1 && activePostIndex !== 0) {
                        updateIndex(activePostIndex - 1)
                    }
                }}
            >
                delete
            </span>
            {posts.length && <StatusPost post={posts[activePostIndex]} />}
        </div>
    )
}
