const INITIAL_STATE = {
    current: {},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'posts': {
            if (action.payload.list_append) {
                return {
                    ...state,
                    current: {
                        ...state.current,
                        list_append: true,
                        list: state.current.list.concat(action.payload.list),
                    },
                };
            }

            return {
                ...state,
                current: action.payload,
            };
        }

        default:
            return state;
    }
}
