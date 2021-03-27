import { GET } from '../../lib/utils';

export const searchForSubreddits = (search_string) => (dispatch) => {
    // const URL = `https://www.reddit.com/subreddits/search.json?q=${search_string}&include_over_18=on`;
    const URL = `https://www.reddit.com/subreddits/search.json?q=${search_string}`;
    GET(URL, (response) => {
            const subreddits = (response.data.children || []).map((item) => {
                let subreddit = {
                    key: item.data.display_name.toLowerCase() + '_' + (new Date()).getTime(),
                    description: item.data.public_description,
                    name: item.data.display_name,
                    name_lower: item.data.display_name.toLowerCase(),
                    url: item.data.url,
                    banner: item.data.banner_img,
                    icon: item.data.icon_img,
                    subscribers: {
                        display: item.data.subscribers,
                        full: item.data.subscribers
                    }
                };

                const subs = subreddit.subscribers.full;
                if (subs > 1000000) {
                    subreddit.subscribers.display = (subs / 100000).toFixed(1) + 'M';
                } else if (subs > 100000) {
                    subreddit.subscribers.display = Math.floor(subs / 1000) + 'K';
                } else if (subs > 10000) {
                    subreddit.subscribers.display = (subs / 1000).toFixed(1) + 'K';
                }
                return subreddit;
            });

            subreddits.sort((a, b) => {
                let a_match = a.name_lower.indexOf(search_string) !== -1;
                let b_match = b.name_lower.indexOf(search_string) !== -1;

                if (a_match && b_match) {
                    // they both match the search string, the one with more subscribers is first
                    return b.subscribers.full - a.subscribers.full;
                } else if (a_match) {
                    return -1; // negative puts a first
                } else if (b_match) {
                    return 1; // positive puts b first
                } else {
                    return b.subscribers.full - a.subscribers.full;
                }
            });

            return subreddits;
    }).then((action_data) => {
        dispatch({
            type: 'search_subreddits',
            payload: action_data
        });
    });
}