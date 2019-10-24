export default (state = {}, action) => {
    switch (action.type) {
        case 'articles':
            return {
                articles: action.payload
            };

        default:
            return state;
    }
}