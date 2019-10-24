import { GET } from '../helpers/utils';
import { cleanArticle } from '../helpers/article';

/*
    /r/pics+gifs+todayilearned/new.json
*/

export const fetchArticles = (subreddit) => (dispatch) => {
    const URL = `https://www.reddit.com/${subreddit.url}.json?limit=25`;
    GET(URL, (response) => {
        return {
            title: subreddit.title || subreddit.name,
            listings: response.data.children.map((item) => {
                return cleanArticle(item.data);
            })
        };
    }).then((action_data) => {
        dispatch({
            type: 'articles',
            payload: action_data
        });
    });
}
