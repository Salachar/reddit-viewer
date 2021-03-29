import {
    GET,
    copy
} from '../../lib/utils';

import {
    parseSubreddit,
    parseSubreddits,
    sortSubreddits,
} from '../../lib/subreddit';

const SHOW_MATURE = false;

export const searchSubreddits = (search_string) => (dispatch) => {
    let URL = `https://www.reddit.com/subreddits/search.json?q=${search_string}`;
    if (SHOW_MATURE) URL += '&include_over_18=on';
    GET(URL, (response) => {
        return sortSubreddits(parseSubreddits(response.data.children), search_string);
    }).then((action_data) => {
        dispatch({
            type: 'search_subreddits',
            payload: action_data
        });
    });
}

export const fetchSubredditData = (subreddit) => (dispatch) => {
    const URL = `https://www.reddit.com/r/${subreddit.name}/about.json`;
    GET(URL, (response) => {
        return parseSubreddit(response.data);
    }).then((action_data) => {
        dispatch({
            type: 'subreddit_data',
            payload: action_data
        });
    });
}

export const subscribeSubreddit = (subreddit, task) => (dispatch, getState) => {
    let subreddits = copy((getState().subreddits || {}).subscribed || []);

    if (task === 'add') {
        subreddits.push(subreddit);
    }
    if (task === 'remove') {
        subreddits = subreddits.filter((current_subreddit) => {
            return current_subreddit.id !== subreddit.id;
        });
    }

    dispatch({
        type: 'subscribe_subreddit',
        payload: subreddits
    });
}
