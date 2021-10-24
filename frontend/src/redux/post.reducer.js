import POST_ACTION_TYPES from "./post.types"
const initialState = {
    activeUsername: null,
    posts: [],
    users: [],
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_ACTION_TYPES.SET_POSTS: {
            return {
                ...state,
                posts: action.payload,
            }
        }
        case POST_ACTION_TYPES.SET_USERS: {
            return {
                ...state,
                users: action.payload,
            }
        }
        case POST_ACTION_TYPES.SET_ACTIVE_USERNAME: {
            return {
                ...state,
                activeUsername: action.payload,
            }
        }
        default: {
            return state
        }
    }
}

export default postReducer
