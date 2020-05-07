import { RECEIVE_COMMENTS, ADD_COMMENT, DELETE_COMMENT } from '../constant'

export default function comments(state = [], action) {
    switch (action.type) {
        // case ADD_GOAL:
        //     return state.concat([action.goal])
        // case REMOVE_GOAL:
        //     return state.filter((goal) => goal.id !== action.id)
        case RECEIVE_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }
        case ADD_COMMENT: 
        return {
            ...state,
            comments: [...state.comments, action.comment]
        }
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter((cmt) => cmt.id !== action.id)
            }
        default:
            return state
    }
}