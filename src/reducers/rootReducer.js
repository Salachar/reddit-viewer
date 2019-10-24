import { combineReducers } from 'redux';

import articleReducer from './articleReducer';
import articlesReducer from './articlesReducer';
import searchReducer from './searchReducer';
import subredditReducer from './subredditReducer';

export default combineReducers({
    article: articleReducer,
    articles: articlesReducer,
    search: searchReducer,
    subreddits: subredditReducer
});