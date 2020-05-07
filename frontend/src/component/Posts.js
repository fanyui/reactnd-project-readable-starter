import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PostCard from './PostCard'
import NewPost from './NewPost'
function Posts(props) {
    const [isNew, setIsNew] = useState(false)
    const counter = useSelector(state => state.posts)
    useEffect(() => {
    }, [])
    return (
        <div className="post">
            { isNew? 
            <NewPost cancel={setIsNew} />
            :  
            <button className="btn" onClick={() => setIsNew(true)}> Create New Post</button>
            }
            
            {counter && counter.posts && counter.posts.map((elt, idex) => <PostCard key={idex} post={elt} />)}

        </div>
    )
}
export default Posts