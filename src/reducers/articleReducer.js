export default (state = {}, action) => {
    switch (action.type) {
        case 'article':
            return {
                article: action.payload
            };

        case 'dismiss_article': // null payload
            return {
                article: action.payload
            };

        default:
            return state;
    }
}