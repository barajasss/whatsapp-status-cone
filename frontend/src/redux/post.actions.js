import POST_ACTION_TYPES from "./post.types"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:5000"

const setPosts = (posts) => ({
    type: POST_ACTION_TYPES.SET_POSTS,
    payload: posts,
})

const setUsers = (users) => ({
    type: POST_ACTION_TYPES.SET_USERS,
    payload: users,
})

const setActiveUsername = (activeUsername) => ({
    type: POST_ACTION_TYPES.SET_ACTIVE_USERNAME,
    payload: activeUsername,
})

const createPost = (post) => async (dispatch, getState) => {
    const res = await axios.post("/posts", post)
    const data = res.data
    dispatch(fetchUsers())
}

const fetchUsers = () => async (dispatch, getState) => {
    const res = await axios.get("/users")
    const users = res.data.result
    console.log(users)
    dispatch(setUsers(users))
}

const fetchPosts = () => async (dispatch, getState) => {
    const username = getState().post.activeUsername
    const res = await axios.get("/posts/" + username)
    const posts = res.data.result
    dispatch(setPosts(posts))
    console.log("the posts are: ", posts)
}
const deletePost = (post) => async (dispatch, getState) => {
    const res = await axios.delete("/posts/" + post._id)
    await dispatch(fetchPosts())
    const posts = getState().post.posts

    if (posts.length === 0) {
        dispatch(setActiveUsername(null))
        await dispatch(fetchUsers())
    }
}

export { setPosts, setUsers, setActiveUsername, createPost, fetchUsers, fetchPosts, deletePost }
