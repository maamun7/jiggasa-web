import * as consts from './constants';

const initialState = {
    searchResponse: null
};

const home = (state = initialState, action) => {
    switch (action.type) {
        case consts.SEARCH_RESPONSE:
            return {
                ...state,
                searchResponse: action.data
            };

        default:
            return state;
    }
};

export default home;
