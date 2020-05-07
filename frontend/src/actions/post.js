import { ADD_POST, REMOVE_POST, RECEIVE_POST } from '../constant'
import { get_posts, createPost, deletPost} from '../api/post'
import { showLoading, hideLoading } from 'react-redux-loading'
function addPost(post) {
    return {
        type: ADD_POST,
        post,
    }
}
function receivePosts(posts) {
    return {
        type: RECEIVE_POST,
        posts,
    }
}

function removePost(id) {
    return {
        type: REMOVE_POST,
        id,
    }
}

export const handleReceivePosts = (category) =>{
    return(dispatch) => {
        dispatch(showLoading())
        return get_posts(category)
                .then(posts => {
                    dispatch(receivePosts(posts))
                    dispatch(hideLoading())

                })
                .catch(e => {
                    dispatch(hideLoading())
                    alert("something went wrong try again")
            })
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