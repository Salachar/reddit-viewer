import marked from 'marked';
import {
    UUID,
    unescapeHTML,
} from './utils';

/*
    Caveats I have noticed from looking at reddit post json:
        title:
            Not everything will have a title, like some askreddit threads.
        url: multipurpose, link to an image or an article or a video
            Type needs to be figured out by looking at a couple of other fields
*/

function parsePostData (data) {
    return {
        ...data,

        title: (data.title || '').replace(/&amp;/g, '&'),
        empty: false, // Mainly used for text to know if there is body content
        type: 'none',
        content: {},
        media: {},

        score_display: ((s) => {
            if (s > 100000) return Math.floor(s / 1000) + 'K';
            if (s > 10000) return (s / 1000).toFixed(1) + 'K';
            return s;
        })(data.score),

        submitted_at: ((date) => { // date is in seconds
            let time_diff = (new Date()).getTime() - (new Date( date * 1000)).getTime();
            time_diff = time_diff / 1000 / 60; // milli -> sec -> min
            // TODO: Should probably add "days" as a possibility
            if (time_diff > 60) return Math.floor(time_diff / 60) + ' hours';
            return Math.floor(time_diff) + ' minutes';
        })(data.created_utc),

        awards: (data.all_awardings || []).map((award) => {
            return {
                name: award.name.toLowerCase(),
                count: award.count,
                // React component key, award.id is not unique enough
                key: `${award.id}-${UUID()}`,
            };
        })
    };
}

function isText (data) {
    return data.is_self;
}

function isImage (data) {
    // Check the post_hint for a tip
    if (data.post_hint && data.post_hint.indexOf('image') !== -1) return true;
    // Do a basic check on the extension of the url
    if (data.url && data.url.match(/.jpg|.jpeg|.png|.bmp|.gif/)) return true;
    // There are probably more things to check
    return false;
}

function isVideo (data) {
    // Check the post_hint
    if (data.post_hint && data.post_hint.indexOf('video') !== -1) return true;

    if (data.url && data.url.match(/.gifv/)) return true;

    // Do a basic check on the common video fields
    if (data.url && data.is_video && data.is_reddit_media_domain) return true;
    // There are probably more things to check
    return false;
}

export function cleanPost (data) {
    try {
        if (!data.author && data.kind) {
            data = data.data.children[0].data;
        }

        let post = parsePostData(data);

        if (isText(data)) {
            post.type = 'text';
            post.content.body = data.selftext;
            post.content.body_html = data.selftext_html;
            if (!post.content.body && !post.content.body_html) {
                post.empty = true;
            }
        } else if (isVideo(data)) {
            post.type = 'video';
            // post.media.video = data.secure_media || data.media;
        } else if (isImage(data)) {
            post.type = 'image';
            post.media.image = data.url;
        } else if (data.url) {
            post.type = 'link';
        }

        return post;
    } catch (e) {
        console.error(e);
        return null;
    }
}

export function cleanComments (comment, parent, even_layer) {
    if (!comment.body) return;

    let parsed_comment = {
        id: comment.id,
        key: `${comment.id}_${UUID()}`,
        author: comment.author,
        body: marked(unescapeHTML(comment.body)),
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
