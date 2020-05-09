import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { handleAddPost } from '../actions/post'
import { TiDeleteOutline } from 'react-icons/ti'

function NewPost(props) {
    const [author, setAuther ] = useState("")
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [body, setBody] = useState("")
    const dispatch = useDispatch()
    const counter = useSelector(state => state.category)

    const postLeft = 103 - body.length
    const submit = () => {
        let id = uuidv4();
        let post = {
            timestamp: new Date().getTime(),
            author,
            id,
            title,
            body,
            category,
        }
        console.log("adding comment", post)
        dispatch(handleAddPost(post))
        props.cancel(false)
    }
    return (
        <div>
            <div className="create-form">
                <h3 className='center'> Add Post</h3>
                <select onChange={(e) => {console.log(e.target.value); setCategory(e.target.value)}} >
                    {
                    counter && counter.categories && counter.categories.map((elt, index) => <option key={index} value={elt.name}>{elt.path}</option>)
                    }
                </select>
                <br />
                <input className="input" type="text" placeholder="Author" name="title" onChange={(e) => setAuther(e.target.value)} />
                <br />

                <input className="input" type="text" placeholder="Title" name="title" onChange={(e) => setTitle(e.target.value)} />
                <br />
                <textarea maxLength={280} placeholder="Description here"  onChange={(e) => setBody(e.target.value)} className="textarea" maxLength={280} name="body" />
                {postLeft <= 100 && (
                    <div className='post-length'>
                        {postLeft}

                    </div>
                )}
                <button className="btn" onClick={() => submit()}
                > Submit
                </button>
                <div className='post-length'>
                    <TiDeleteOutline color='#e0245e' onClick={() => props.cancel(false)}> close</TiDeleteOutline>
                </div>
            </div> 
        </div>
    )
}

export default NewPost