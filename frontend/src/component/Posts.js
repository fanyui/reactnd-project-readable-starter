import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PostCard from './PostCard'
function Posts(props) {
    const counter = useSelector(state => state.posts)
    useEffect(() => {
    }, [])
    return (
        <div className="restaurant">
            {console.log("counter post is ", counter.posts)}
            {counter && counter.posts && counter.posts.map((elt, idex) => <PostCard key={idex} post={elt} />)}

        </div>
    )
}
export default Posts