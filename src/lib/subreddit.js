export function parseSubreddit (data) {
    let subreddit = {
        id: data.name,
        // key: data.display_name.toLowerCase() + '_' + (new Date()).getTime(),
        description: data.public_description,
        name: data.display_name.toLowerCase(),
        display_name: data.display_name,
        url: data.url,
        banner: data.banner_img,
        icon: data.icon_img,
        subscribers: {
            display: data.subscribers,
            full: data.subscribers
        },
        full_data: data,
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
}

export function parseSubreddits (subreddits_list = []) {
    return subreddits_list.map((item) => {
        const { data = {} } = item;
        return parseSubreddit(data);
    });
};

export function sortSubreddits (subreddits, search_string) {
    subreddits.sort((a, b) => {
        let a_match = a.name.indexOf(search_string) !== -1;
        let b_match = b.name.indexOf(search_string) !== -1;

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
}
