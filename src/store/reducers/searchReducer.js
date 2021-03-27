const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'search_subreddits':
            return {
                subreddits: action.payload
            };

        default:
            return state;
    }
}
