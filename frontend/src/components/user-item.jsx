import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setActiveUsername } from "../redux/post.actions"

export default function UserItem(props) {
    const activeUsername = useSelector((state) => state.post.activeUsername)

    const dispatch = useDispatch()

    const updateActiveUsername = () => {
        dispatch(setActiveUsername(props.username))
    }

    return (
        <div
            class={`user-item ${activeUsername === props.username ? "active" : ""}`}
            onClick={updateActiveUsername}
        >
            <div>
                <img
                    src="https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg.webp"
                    alt="user image"
                />
            </div>
            <h1>{props.username}</h1>
        </div>
    )
}
