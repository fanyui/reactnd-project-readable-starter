import React, { useEffect} from 'react'
import Posts from './component/Posts'
import { useParams } from 'react-router-dom'
import { useDispatch, } from 'react-redux'
import { handleReceivePosts } from './actions/post'
function Home(props) {
    const dispatch = useDispatch()
    let {category} = useParams()
    useEffect(() => {
        if(!category){
            dispatch(handleReceivePosts("all"))

        }
        else{
            dispatch(handleReceivePosts(category))

        }
    }, [category])
    return (
        <div>
            <Posts />
        </div>
    )
}

export default Home