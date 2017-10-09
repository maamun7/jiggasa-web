export const signupReducer = (state = null, action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
            return {...state, res : action.response}
        case 'SIGNUP_ERROR':

            console.log("ERROR :", action.response);
            
            return {...state, res : action.response}
        default:
            return state;
    }
};