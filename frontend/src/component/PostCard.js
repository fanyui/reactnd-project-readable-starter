import React, { useState } from "react"
import { formatDate } from '../utils'
import { Link } from 'react-router-dom'

import { TiArrowForwardOutline, TiHeartOutline, TiHeartFullOutline, TiDeleteOutline } from 'react-icons/ti'
function PostCard(props) {
    const [likes, setLikes] = useState(false)
    return (
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

                    <button className='heart-button' onClick={() => setLikes(true)}  >
                        {likes === true ? <TiHeartFullOutline color='#e0245e' className='post-icon' />
                            :
                            <TiHeartFullOutline className='post-icon' />
                        }
                    </button>
                    <span>{props.post.voteScore}</span>
                    <TiDeleteOutline color='#e0245e' onClick={() => { console.log("deleting") }} className='post-icon' />
                </div>
            </div>
        </div>
    )
}
export default PostCard