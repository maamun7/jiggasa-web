import React from 'react';
import AuthModal from '../Form/AuthModal'

const NavUser = ({
    isAuthenticated,
    user,
    login,
    loginFailure,
    loginSuccess,
    signUp,
    signUpFailure,
    signUpSuccess,
    logout,
    }) => {
    if (isAuthenticated) {
        return (
            null
        );

    } else {
        return (
            <AuthModal
                isAuthenticated={isAuthenticated}
                user={user}
                login={login}
                loginFailure={loginFailure}
                loginSuccess={loginSuccess}
                signUp={signUp}
                signUpFailure={signUpFailure}
                signUpSuccess={signUpSuccess}
                logout={logout}
                />
        );
    }

};

export default NavUser;