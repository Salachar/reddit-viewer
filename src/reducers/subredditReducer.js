export default (state = {}, action) => {
    switch (action.type) {
        case 'subscribe_subreddit':
            let subscribed_map = {};
            (action.payload || []).forEach((subreddit) => {
                subscribed_map[subreddit.key] = subreddit;
            })
            return {
                subscribed: action.payload,
                subscribed_map: subscribed_map
            };

        default:
            return state;
    }
}