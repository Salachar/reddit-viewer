const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'posts':
            return action.payload;

        default:
            return state;
    }
}
