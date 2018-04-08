import React from 'react';
import AuthModal from '../Form/AuthModal';
import SessionInfo from '../Header/SessionInfo';

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
            <SessionInfo 
                user ={user}
                signOut ={signOut}
                />
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