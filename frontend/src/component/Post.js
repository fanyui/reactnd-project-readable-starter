import React, { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { handleGetPostDetails } from '../actions/post'
import { handleGetComments, handleCreateComment } from '../actions/comment'
import PostCard from "./PostCard"
import Comment from "./Comment"
import { v4 as uuidv4 } from 'uuid';

function Post(props) {
    let {id } = useParams()
    const [ author, setAuthor] = useState("")
    const [ body, setBody] = useState("")
    const dispatch = useDispatch()
    const post = useSelector(state => state.posts)
    const comments = useSelector(state => state.comments)
    const postLeft = 103 - body.length

    const addComment = () =>{
        let commentId = uuidv4();
        let comment = {
            id: commentId,
            timestamp: new Date(),
            parentId: id,
            author,
            body,
            

        }
        console.log("adding comment", comment)
        dispatch(handleCreateComment(comment))
    }
    useEffect(() => {
        dispatch(handleGetPostDetails(id))
        dispatch(handleGetComments(id))
    },[id])
    return (
        <div className="post-item">
            {!post.post && <span> Post doesnot exist </span>}

            {post.post && <PostCard post={post.post} />}
            {console.log("comments are ", comments.comments)}
            <div className="create-form">
                <h3 className='center'> Add Comment</h3>

                <input className="input" type="text" placeholder="Author" name="authoer" onChange={(e)=> setAuthor(e.target.value)} />
                <br />
                <textarea maxLength={280} placeholder="comment here" onChange={(e) => setBody(e.target.value)} className="textarea" maxLength={280} name="body" /> 
                {postLeft <= 100 && (
                    <div className='post-length'>
                        {postLeft}

                    </div>
                )}
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