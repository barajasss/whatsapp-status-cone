import React from "react"

export default function Modal(props) {
    return (
        <div className="modal" style={{ display: props.visible ? "block" : "none" }}>
            {props.children}
        </div>
    )
}
