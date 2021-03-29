import { combineReducers } from 'redux';

import postReducer from './postReducer';
import postsReducer from './postsReducer';
import subredditReducer from './subredditReducer';

export default combineReducers({
    comments: postReducer,
    posts: postsReducer,
    subreddits: subredditReducer
});
