import { GET } from '../../lib/utils';
import { cleanPost } from '../../lib/post';

/*
    /r/pics+gifs+todayilearned/new.json
*/

export const fetchPosts = (subreddit) => (dispatch) => {
    console.log(subreddit);
    if (typeof subreddit === 'string') {
        subreddit = {
            url: `/r/${subreddit}`,
            title: subreddit,
            name: subreddit,
        };
    }
    const URL = `https://www.reddit.com/${subreddit.url}.json?limit=25`;
    GET(URL, (response) => {
        return {
            title: subreddit.title || subreddit.name,
            list: response.data.children.map((item) => {
                return cleanPost(item.data);
            })
        };
    }).then((action_data) => {
        dispatch({
            type: 'posts',
            payload: action_data
        });
    });
}
