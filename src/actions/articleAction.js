import { GET } from '../helpers/utils';
import {
    cleanArticle,
    cleanComments
 } from '../helpers/article';

 /*
    Fetching a full article requires the subreddit the article belongs to
    and the

    Sample URL: https://www.reddit.com/r/NintendoSwitch/comments/de98bj.json
 */

export const fetchArticle = (article) => (dispatch) => {
    const URL = `https://www.reddit.com/r/${article.subreddit}/comments/${article.id}.json`;
    GET(URL, (response) => {
        let [article_data, comment_data] = response;

        let article = {
            data: cleanArticle(article_data),
            comments: []
        };

        comment_data = comment_data.data.children;
        comment_data.forEach((comment) => {
            cleanComments(comment.data, article.comments, true);
        });

        return article;
    }).then((action_data) => {
        dispatch({
            type: 'article',
            payload: action_data
        });
    });
}

export const dismissArticle = (article) => (dispatch) => {
    dispatch({
        type: 'article',
        payload: null
    });
}
