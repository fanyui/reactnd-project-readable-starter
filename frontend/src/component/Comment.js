import React, { useState } from "react"
import { formatDate } from '../utils'
import { TiHeartFullOutline, TiDeleteOutline } from 'react-icons/ti'
function Comment(props) {
    const [likes, setLikes] = useState(false)
    return (
        <div className="comments-section">
            <div className="post-info">
                <div>
                    <span> {props.comment.title} </span>
                    <div> {formatDate(props.comment.timestamp)} </div>
                    <p> {props.comment.body}

                    </p>
                </div>
                <div className='post-icons'>
                    <span> {props.comment.author} </span>

                    <button className='heart-button' onClick={() => setLikes(true)}  >
                        {likes === true ? <TiHeartFullOutline color='#e0245e' className='post-icon' />
                            :
                            <TiHeartFullOutline className='post-icon' />
                        }
                    </button>
                    <span>{props.comment.voteScore}</span>
                    <TiDeleteOutline color='#e0245e' onClick={() => { console.log("deleting") }} className='post-icon' />
                </div>
            </div>
        </div>
    )
}
export default Comment