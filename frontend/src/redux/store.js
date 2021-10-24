import { createStore, combineReducers, applyMiddleware } from "redux"
import postReducer from "./post.reducer"
import reduxThunk from "redux-thunk"

const rootReducer = combineReducers({
    post: postReducer,
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk))

export default store
