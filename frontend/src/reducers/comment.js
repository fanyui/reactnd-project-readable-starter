import { RECEIVE_COMMENTS } from '../constant'

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
        default:
            return state
    }
}