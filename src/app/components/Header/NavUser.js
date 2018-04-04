import React from 'react';
import AuthModal from '../Form/AuthModal'

const NavUser = ({
    isAuthenticated,
    user,
    signUp,
    signupResponse,
    signupFail,
    login,
    loginFail,
    logout
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
                login ={login}
                loginFail ={loginFail}
                />
        );
    }

};

export default NavUser;