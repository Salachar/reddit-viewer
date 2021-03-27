import { GET } from '../../lib/utils';
import {
    cleanPost,
    cleanComments
 } from '../../lib/post';

 /*
    Fetching a full article requires the subreddit the article belongs to
    and the

    Sample URL: https://www.reddit.com/r/NintendoSwitch/comments/de98bj.json
 */

export const fetchPost = (article) => (dispatch) => {
    const URL = `https://www.reddit.com/r/${article.subreddit}/comments/${article.id}.json`;
    GET(URL, (response) => {
        let [article_data, comment_data] = response;

        let post = {
            data: cleanPost(article_data),
            comments: []
        };

        comment_data = comment_data.data.children;
        comment_data.forEach((comment) => {
            cleanComments(comment.data, post.comments, true);
        });

        return post;
    }).then((action_data) => {
        dispatch({
            type: 'post',
            payload: action_data
        });
    });
}
