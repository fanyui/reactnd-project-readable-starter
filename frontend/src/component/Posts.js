import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
function Posts(props) {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.post)
    useEffect(() => {
    }, [])
    return (
        <div className="restaurant">
            {counter && counter.posts && counter.posts.map((elt, idex) => <li key={idex}>elt.title</li>)}

        </div>
    )
}