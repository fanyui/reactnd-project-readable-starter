import React, { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { handleGetPostDetails } from '../actions/post'
import { handleGetComments } from '../actions/comment'
import PostCard from "./PostCard"
import Comment from "./Comment"

function Post(props) {
    let {id } = useParams()
    const [ body, setBody] = useState("")
    const dispatch = useDispatch()
    const post = useSelector(state => state.posts)
    const comments = useSelector(state => state.comments)

    const addComment = () =>{
        console.log("adding comment")
    }
    useEffect(() => {
        dispatch(handleGetPostDetails(id))
        dispatch(handleGetComments(id))
    },[id])
    return (
        <div className="post-item">
            {post.post && <PostCard post={post.post} />}
            {console.log("comments are ", comments.comments)}
            <div className="create-form">
                <textarea placeholder="comment here" onChange={(e) => setBody(e.target.value)} className="textarea" maxLength={280} name="body"> </textarea>
                <button className="btn" onClick={() => addComment()}
                > Comment
                </button> 
            </div>           
            {comments && comments.comments &&  comments.comments.map((cmt, key) =>
             <Comment comment={cmt}  key={key}/> 
            
            )}
        </div>
    )
}
export default Post