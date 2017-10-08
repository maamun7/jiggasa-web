export const signupReducer = (state = null, action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':

            console.log("DEBUGG HIIIIIIIII:", action.response);
            return {...state, response : action.response}
        default:
            return state;
    }
};