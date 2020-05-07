import { RECEIVE_COMMENTS, ADD_COMMENT, DELETE_COMMENT } from '../constant'
import { get_comments, create_comment, delete_comment} from '../api/comment'
function getComments(comments) {
    return {
        type: RECEIVE_COMMENTS,
        comments,
    }
}

function addComment( comment) {
    return {
        type: ADD_COMMENT,
        comment,
    }
}
function removeComment( id) {
    return {
        type: DELETE_COMMENT,
        id,
    }
}
export function handleCreateComment(comment) {
    return (dispatch) => {
        return create_comment(comment)
            .then((resp) => {
                console.log("response of creating comment is ", resp)
                dispatch(addComment(resp))
            })
            .catch(() => alert('There was and error creating comment. Try again. '))
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

export function handleDeleteComment(comment) {
    return (dispatch) => {
        dispatch(removeComment(comment.id))

        return delete_comment(comment.id)
            .catch(() => {
                dispatch(addComment(comment))
                alert('An error occured. Try again. ')
            })
    }
}