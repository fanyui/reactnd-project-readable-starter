import React, { useState } from "react"
import { formatDate } from '../utils'
import { Link } from 'react-router-dom'
import { handleDeletePost, handleVote } from '../actions/post'
import { useDispatch } from "react-redux"

import { TiArrowForwardOutline, TiEdit, TiHeartOutline, TiHeartFullOutline, TiDeleteOutline } from 'react-icons/ti'
import EditPost from "./EditPost"
function PostCard(props) {
    const [likes, setLikes] = useState(false)
    const [editing, setEditing] = useState("")
    const dispatch = useDispatch()
    const onDelete = () => {
        dispatch(handleDeletePost(props.post))
    }

    const vote = () => {
        let option = {
            option: likes ? "downVote" : "upVote"
        }
        dispatch(handleVote(option, props.post))
    }
    return (

        <>
        {
           (editing == props.post.id) 
           ? 
                    <EditPost cancel={setEditing} post={props.post} /> 
           :

            <div className="post-item">
                <div className="post-info">
                    <div>
                        <span> {props.post.title} </span>
                        <div> {formatDate(props.post.timestamp)} </div>
                        <p> {props.post.body}

                        </p>
                    </div>
                    <div className='post-icons'>
                        <span> {props.post.author} </span>
                        <Link to={`/post/${props.post.id}`} >
                            <TiArrowForwardOutline className='post-icon' />
                        </Link>

                        <button className='heart-button' onClick={() => { setLikes(!likes); vote()}}  >
                            {likes === true ? <TiHeartFullOutline color='#e0245e' className='post-icon' />
                                :
                                <TiHeartFullOutline className='post-icon' />
                            }
                        </button>
                        <span>{props.post.voteScore}</span>
                        <TiEdit  onClick={() => setEditing(props.post.id)} className='post-icon' />
                        <TiDeleteOutline color='#e0245e' onClick={() => onDelete()} className='post-icon' />
                    </div>
                </div>
            </div>
        }
        </>
    )
}
export default PostCard