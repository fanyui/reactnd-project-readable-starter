import { RECEIVE_COMMENTS } from '../constant'
import { get_comments, } from '../api/comment'
function getComments(comments) {
    return {
        type: RECEIVE_COMMENTS,
        comments,
    }
}




export const handleGetComments = (postId) => {
    return (dispatch) => {
        return get_comments(postId)
            .then((comments) => {
                console.log(comments)
                dispatch(getComments(comments))
            })
            .catch((e) => alert('There was and error. Try again. ' + e))
    }
}
