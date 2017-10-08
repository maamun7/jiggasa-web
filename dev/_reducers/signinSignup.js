export const signupReducer = (state = [], action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
            return [
                ...state,
                Object.assign({}, action.response)
            ];
        default:
            return state;
    }
};