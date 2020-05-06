import { ADD_POST, REMOVE_POST} from '../constant'
import { getPosts, createPost, deletPost } from '../api/post'
function addPost(post) {
    return {
        type: ADD_POST,
        post,
    }
}

function removeGoal(id) {
    return {
        type: REMOVE_POST,
        id,
    }
}


export function handleAddPost(name, cb) {
    return (dispatch) => {
        return createPost(name)
            .then((post) => {
                dispatch(addPost(post))
                cb()
            })
            .catch(() => alert('There was and error. Try again. '))
    }
}

export function handleDeletePost(post) {
    return (dispatch) => {
        dispatch(removePost(post.id))

        return deletPost(post.id)
            .catch(() => {
                dispatch(addPost(post))
                alert('An error occured. Try again. ')
            })
    }
}