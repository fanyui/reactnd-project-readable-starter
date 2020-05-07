import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handleGetCategory } from '../actions/category'
function Categories(props) {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.category)
    useEffect(() => {
        dispatch(handleGetCategory())
    }, [])

    return (
        <div>
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
					    </NavLink>
                    </li>
            {counter && counter.categories && counter.categories.map((elt, index)=><li key={index}>
                    <NavLink to={elt.path} exact activeClassName='active'>
                        {elt.name}
                    </NavLink>
                
                </li>)
            }
                </ul>
            </nav>
        </div>
    )
}
export default Categories