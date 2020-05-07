import { GET_CATEGOTY } from '../constant'

export default function category(state = [], action) {
    switch (action.type) {
        // case ADD_GOAL:
        //     return state.concat([action.goal])
        // case REMOVE_GOAL:
        //     return state.filter((goal) => goal.id !== action.id)
        case GET_CATEGOTY:
            return {...state, ...action.categories }
        default:
            return state
    }
}