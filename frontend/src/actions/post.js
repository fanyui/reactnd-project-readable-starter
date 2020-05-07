import { ADD_POST, REMOVE_POST, RECEIVE_POST, POST_DETAIL, VOTE_POST, EDIT_POST } from '../constant'
import { get_posts, createPost, deletPost, get_post_details, vote_post, edit_post} from '../api/post'
import { showLoading, hideLoading } from 'react-redux-loading'
function addPost(ActionType, post) {
    return {
        type: ActionType,
        post,
    }
}
function receivePosts(posts) {
    return {
        type: RECEIVE_POST,
        posts,
    }
}
function editPost(post) {
    return {
        type: EDIT_POST,
        post,
    }
}

function removePost(id) {
    return {
        type: REMOVE_POST,
        id,
    }
}
export const handleGetPostDetails = (id) => {
    return(dispatch) => {
        return get_post_details(id)
            .then(post => {
                dispatch(addPost(POST_DETAIL, post))
            })
            .catch(e => alert("error fetching post details"))
    }
    console.log("getting post details")
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

export function handleEditPost(post, id) {
    return (dispatch) => {
        return edit_post(post, id)
            .then((post) => {
                dispatch(editPost(post))
            })
            .catch((e) => alert('There was and error. Try again. '+e))
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
function vote(post) {
    return {
        type: VOTE_POST,
        post,
    }
}
export function handleVote(options, post) {
    return (dispatch) => {
        // dispatch(removePost(post.id))

        return vote_post(options, post.id)
            .then((cmt) => {
                dispatch(vote(cmt))
            })
            .catch((e) => {
                // dispatch(addPost(post))
                alert('An error occured. Try again. '+e)
            })
    }
}