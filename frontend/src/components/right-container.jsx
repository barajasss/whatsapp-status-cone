import React from "react"
import CreateStatus from "./create-status"
import ViewStatus from "./view-status"
import { useSelector } from "react-redux"

export default function RightContainer() {
    const activeUsername = useSelector((state) => state.post.activeUsername)
    return <div class="right-container">{activeUsername ? <ViewStatus /> : <CreateStatus />}</div>
}
