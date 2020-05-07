import {combineReducers} from 'redux'

import posts from './post'
import loading from './loading'
import comment from './comment'
import category from './category'
import { loadingBarReducer } from 'react-redux-loading'


export default combineReducers({
    posts, loading, comment, category, loadingBar: loadingBarReducer,
}) 