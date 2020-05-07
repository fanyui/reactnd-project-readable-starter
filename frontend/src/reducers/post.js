import { ADD_POST, REMOVE_POST, RECEIVE_POST, POST_DETAIL, VOTE_POST, EDIT_POST } from '../constant'
export default function goals(state = [], action) {
    switch (action.type) {
        case RECEIVE_POST:
            return {
                ...state,
                posts: [...action.posts],
            }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.post, action.post]
            }
        case REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.id)
            }

        case VOTE_POST:
            return {
                ...state,
                post: action.post,
                posts: state.posts.map((post) => post.id === action.post.id ? action.post : post)
            }
        case POST_DETAIL: 
            return {
                ...state,
                post: action.post
            }
        case EDIT_POST: 
            return {
                ...state,
                posts: state.posts.map((post) => post.id === action.post.id ? action.post : post)
            }
        default:
            return state
    }
}