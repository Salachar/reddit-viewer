import { GET, copy } from '../../lib/utils';
import { cleanPost } from '../../lib/post';

import { fetchSubredditData } from './subredditAction';

/*
    /r/pics+gifs+todayilearned/new.json
        ?count=count of before/after post
        ?limit=number of posts wanted in return
        ?after=post.id
        ?before=post.id
*/

export const fetchPosts = (subreddit, opts = {}) => (dispatch, getState) => {
    const {
        limit = 25,
        count,
        after,
    } = opts;

    subreddit.name = subreddit.name || subreddit.title.toLowerCase();
    subreddit.type = subreddit.type || 'subreddit';

    const subreddit_current = copy(getState().posts.current.subreddit || {});
    const is_current_subreddit = subreddit_current && subreddit_current.name === subreddit.name;

    if (subreddit.type === 'subreddit') {
        const subreddits_data = copy((getState().subreddits || {}).data || {});
        const subreddit_data = subreddits_data[subreddit.name];
        if (!subreddit_data) {
            dispatch(fetchSubredditData(subreddit));
        } else {
            subreddit = subreddit_data;
        }
    }

    let URL = `https://www.reddit.com/${subreddit.url}.json?limit=${limit}`;
    if (count) URL += `&count=${count}`;
    if (after) URL += `&after=${after}`;

    GET(URL, (response) => {
        return {
            title: subreddit.title || subreddit.name,
            subreddit,
            list_append: (is_current_subreddit && Boolean(after)),
            list: response.data.children.map((item) => {
                return cleanPost(item.data);
            }),
        };
    }).then((action_data) => {
        dispatch({
            type: 'posts',
            payload: action_data
        });
    });
}
