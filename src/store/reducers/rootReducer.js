import { combineReducers } from 'redux';

import postReducer from './postReducer';
import postsReducer from './postsReducer';
import searchReducer from './searchReducer';
import subredditReducer from './subredditReducer';

export default combineReducers({
    comments: postReducer,
    posts: postsReducer,
    search: searchReducer,
    subreddits: subredditReducer
});
