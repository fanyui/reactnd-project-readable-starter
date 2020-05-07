import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { handleEditPost } from '../actions/post'
import { TiDeleteOutline } from 'react-icons/ti'

function EditPost(props) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const dispatch = useDispatch()
    const postLeft = 103 - body.length

    const editPost = () => {
        let post = {
            title,
            body,
        }
        console.log("adding comment", post)
        dispatch(handleEditPost(post, props.post.id))
        props.cancel("")
    }
    useEffect(()=> {
        setTitle(props.post.title)
        setBody(props.post.body)
    },[])

    return (
        <div>
            <div className="create-form">
                <h3 className='center'> Editing Post</h3>

                <input className="input" type="text" placeholder="Title" value={title} name="title" onChange={(e) => setTitle(e.target.value)} />
                <br />
                <textarea maxLength={280} placeholder="Description here" value={body} onChange={(e) => setBody(e.target.value)} className="textarea" maxLength={280} name="body" />
                {postLeft <= 100 && (
                    <div className='post-length'>
                        {postLeft}

                    </div>
                )}
                <button className="btn" onClick={() => editPost()}
                > Submit
                </button>
                <div className='post-length'>
                <TiDeleteOutline color='#e0245e' onClick={() => props.cancel("")}> close</TiDeleteOutline>
                </div>
            </div>  
        </div>
    )
}

export default EditPost