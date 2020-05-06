import { ADD_POST, REMOVE_POST } from '../constant'
export default function goals(state = [], action) {
    switch (action.type) {
        case ADD_POST:
            return state.concat([action.post])
        case REMOVE_POST:
            return state.filter((post) => post.id !== action.id)
        default:
            return state
    }
}