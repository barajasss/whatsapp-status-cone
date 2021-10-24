import React from "react"
import LeftContainer from "./left-container"
import RightContainer from "./right-container"

export default function AppWrapper() {
    return (
        <div class="app-wrapper">
            <LeftContainer />
            <RightContainer />
        </div>
    )
}
