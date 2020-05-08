import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PostCard from './PostCard'
import { handleSortPost } from '../actions/post'
import NewPost from './NewPost'
function Posts(props) {
    const dispatch = useDispatch()
    const [isNew, setIsNew] = useState(false)
    const [voteOrder, setVoteOrder] = useState("default")
    const [timeOrder, setTimeOrder] = useState("default")
    const counter = useSelector(state => state.posts)
    useEffect(() => {

        // dispatch(handleSortPost("time", timeOrder))
       voteOrder !== "default" && dispatch(handleSortPost("vote", voteOrder))

    }, [voteOrder])
    useEffect(() => {
        timeOrder !== "default" && dispatch(handleSortPost("time", timeOrder))
    }, [timeOrder])
    return (
        <div className="post">
            { isNew? 
            <NewPost cancel={setIsNew} />
            :  
            <div className="top-section"> 
                <div className="sort-lable">
                    <label>Time</label>
                    <select onChange={(e)=> setTimeOrder(e.target.value)}> 
                        <option>Default</option>
                        <option value="asc">Asc</option>
                        <option value="dsc">Desc</option>
                    </select>
                </div>
                <div className="sort-lable">
                    <label>Vote</label>
                        <select onChange={(e) => setVoteOrder(e.target.value)}> 
                        <option>Default</option>
                        <option value="asc">Asc</option>
                        <option value="dsc">Desc</option>
                    </select>
                </div>
                <button className="btn-create" onClick={() => setIsNew(true)}> Create New Post</button>
            </div>
            }
            
            {counter && counter.posts && counter.posts.map((elt, idex) => <PostCard key={idex} post={elt} />)}

        </div>
    )
}
export default Posts