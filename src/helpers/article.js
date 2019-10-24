import { UUID } from './utils';

/*
    Caveats I have noticed from looking at reddit post json:
        title:
            Not everything will have a title, like some askreddit threads.
        url: multipurpose, link to an image or an article or a video
            Type needs to be figured out by looking at a couple of other fields
*/

export function cleanArticle (data) {
    try {
        if (!data.author && data.kind) {
            data = data.data.children[0].data;
        }

        let article = {
            id: data.id,
            key: data.id + '_' + UUID(),
            name: data.name, // This is used for "pagination"
            title: (data.title || '').replace(/&amp;/g, '&'),
            author: data.author,
            subreddit: data.subreddit,
            created_at: data.created_utc,
            submmited: null,
            permalink: data.permalink,
            stickied: data.stickied,
            full_data: data,
            type: 'none',
            score: {
                full: data.score,
                display: data.score
            },
            media: {
                thumbnail: data.thumbnail
            },
            comments: {
                amount: data.num_comments
            },
            awards: (data.all_awardings || []).map((award) => {
                return {
                    name: award.name.toLowerCase(),
                    count: award.count,
                    key: `${award.id}-${UUID()}`
                };
            })
        };

        if (article.score.full > 100000) {
            article.score.display = Math.floor(article.score.full / 1000) + 'K';
        } else if (article.score.full > 10000) {
            article.score.display = (article.score.full / 1000).toFixed(1) + 'K';
        }

        let submitted = article.created_at * 1000;
        let time_diff = (new Date()).getTime() - (new Date(submitted)).getTime();
        // milli -> sec -> min
        time_diff = time_diff / 1000 / 60;
        if (time_diff > 60) {
            time_diff = Math.floor(time_diff / 60) + ' hours';
        } else {
            time_diff = Math.floor(time_diff) + ' minutes';
        }
        article.submmited = time_diff;

        if (data.is_self) {
            article.type = 'text';
        } else if (data.url && data.is_video && data.is_reddit_media_domain) {
            article.type = 'video';
            article.media.video = data.secure_media || data.media;
        } else if (data.url && data.url.match(/.jpg|.jpeg|.png|.bmp|.gif/)) {
            article.type = 'image';
            article.media.image = data.url;
        } else if (data.url) {
            article.type = 'link';
        }

        return article;
    } catch (e) {
        console.error(e);
        return null;
    }
}

export function cleanComments (comment, parent, even_layer) {
    // debugger;
    if (!comment.body) return;

    let parsed_comment = {
        id: comment.id,
        key: `${comment.id}_${UUID()}`,
        author: comment.author,
        body: comment.body,
        score: comment.score,
        awards: (comment.all_awardings || []).map((award) => {
            return {
                name: award.name.toLowerCase(),
                count: award.count,
                key: `${award.id}-${UUID()}`
            };
        }),
        even: even_layer
    };
    parent.push(parsed_comment);

    if (comment.replies && comment.replies.data.children) {
        parsed_comment.replies = [];
        comment.replies.data.children.forEach((reply) => {
            cleanComments(reply.data, parsed_comment.replies, !even_layer);
        });
    }
}
