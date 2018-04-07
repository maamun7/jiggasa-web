import React from 'react';
import AuthModal from '../Form/AuthModal'

const NavUser = ({
    isAuthenticated,
    user,
    signUp,
    signupResponse,
    signupFail,
    signIn,
    signinFail,
    signOut
    }) => {
    if (isAuthenticated) {
        return (
            null
        );
    } else {
        return (
            <AuthModal
                isAuthenticated={isAuthenticated}
                signUp ={signUp}
                signupResponse ={signupResponse}
                signupFail ={signupFail}
                signIn ={signIn}
                signinFail ={signinFail}
                />
        );
    }

};

export default NavUser;