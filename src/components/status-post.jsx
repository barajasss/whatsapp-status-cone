import React from "react"

export default function StatusPost(props) {
    const post = props.post
    if (!post) {
        return <></>
    }
    return (
        <div className="status-post">
            {post.type === "text" ? (
                <div className="text-post" style={{ backgroundColor: post.backgroundColor }}>
                    {post.text}
                </div>
            ) : (
                <div className="image-post">
                    <img src={post.imageUrl} alt={post.imageCaption} />
                    <div>{post.imageCaption}</div>
                </div>
            )}
        </div>
    )
}
