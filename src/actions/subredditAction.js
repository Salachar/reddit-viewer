import { copy } from '../helpers/utils';

export const subscribeSubreddit = (subreddit, task) => (dispatch, getState) => {
    let subreddits = copy((getState().subreddits || {}).subscribed || []);

    if (task === 'add') {
        subreddits.push(subreddit);
    } else {
        subreddits = subreddits.filter((current_subreddit) => {
            return current_subreddit.key !== subreddit.key;
        });
    }

    dispatch({
        type: 'subscribe_subreddit',
        payload: subreddits
    });
}