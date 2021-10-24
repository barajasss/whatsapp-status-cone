import React, { useEffect } from "react"
import UserItem from "./user-item"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../redux/post.actions"

export default function UserContainer() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.post.users)
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div className="user-container">
            {users.map((user) => (
                <UserItem username={user} />
            ))}
        </div>
    )
}
