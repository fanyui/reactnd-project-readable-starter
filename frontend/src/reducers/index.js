import {combineReducers} from 'redux'

import posts from './post'
import loading from './loading'
import comments from './comment'
import category from './category'
import { loadingBarReducer } from 'react-redux-loading'


export default combineReducers({
    posts, loading, comments, category, loadingBar: loadingBarReducer,
}) 