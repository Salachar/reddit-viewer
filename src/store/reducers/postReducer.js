const INITIAL_STATE = {
    byID: {},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'post': {
            const { byID = {} } = state;
            byID[action.payload.data.id] = action.payload.comments;
            return { byID };
        }

        default:
            return state;
    }
}
