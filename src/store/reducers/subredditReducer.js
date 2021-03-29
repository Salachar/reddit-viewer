const INITIAL_STATE = {
    subscribed: [],
    subscribed_map: {},
    search_list: [],
    data: {},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'subscribe_subreddit':
            let subscribed_map = {};
            (action.payload || []).forEach((subreddit) => {
                subscribed_map[subreddit.id] = subreddit;
            });

            return {
                ...state,
                subscribed: action.payload,
                subscribed_map: subscribed_map
            };

        case 'subreddit_data': {
            const data = state.data;
            const subreddit_data = action.payload;
            data[subreddit_data.name] = subreddit_data;

            return {
                ...state,
                data,
            };
        }

        case 'search_subreddits': {
            // Subreddits from the search have icon and banner data and can be
            // added to the data map
            const data = state.data;
            const search_list = action.payload;

            search_list.forEach((subreddit_data) => {
                data[subreddit_data.name] = subreddit_data;
            });

            return {
                ...state,
                search_list,
                data,
            };
        }

        default:
            return state;
    }
}
