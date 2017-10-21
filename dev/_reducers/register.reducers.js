export const signupReducer = (state = null, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            return {...state, res : action.response}
        case 'REGISTER_ERROR':
            return {...state, res : action.response}
        default:
            return state;
    }
};