import {combineReducers} from 'redux'

import post from './post'
import loading from './loading'
import comment from './comment'

export default  combineReducers({post, loading, comment,}) 