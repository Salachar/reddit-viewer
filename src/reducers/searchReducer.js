export default (state = {}, action) => {
    switch (action.type) {
        case 'search_subreddits':
            return {
                subreddits: action.payload
            };

        default:
            return state;
    }
}