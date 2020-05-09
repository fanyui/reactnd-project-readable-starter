import { ADD_POST, REMOVE_POST, RECEIVE_POST, POST_DETAIL, VOTE_POST, EDIT_POST, SORT_POST } from '../constant'
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
                posts: [...state.posts, action.post]
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
                post: action.post,
                posts: state.posts.map((post) => post.id === action.post.id ? action.post : post)
            }
        case SORT_POST: 
            return {
                ...state,
                posts: sortThem(state.posts, action.order)
            }
        default:
            return state
}
}

function sortThem(arr, sortOrder) {
    console.log("sorting")
    let clone = [...arr]
    if(sortOrder.type == "vote"){
        if (sortOrder.order == 'asc') {
            clone.sort((a, b) => (a.voteScore > b.voteScore) ? 1 : ((b.voteScore > a.voteScore) ? -1 : 0))
        }
        else {
            clone.sort((a, b) => (a.voteScore < b.voteScore) ? 1 : ((b.voteScore < a.voteScore) ? -1 : 0))
        }
    }
    else{
        if (sortOrder.order == 'asc') {
            clone.sort((a, b) => (+a.timestamp > +b.timestamp) ? 1 : ((+b.timestamp > +a.timestamp) ? -1 : 0))
        }
        else {
            clone.sort((a, b) => (+a.timestamp < +b.timestamp) ? 1 : ((+b.timestamp < +a.timestamp) ? -1 : 0))
        }
    }
    return clone;
}