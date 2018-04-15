import React from 'react';
import AuthModal from '../Form/AuthModal';
import SessionInfo from '../Header/SessionInfo';
import NavSearch from './NavSearch';
import NavUser from './NavUser';

const PlainHeader = ({
    isAuthenticated,
    user,
    signUp,
    signupResponse,
    signupFail,
    signIn,
    signinFail,
    signOut,
    search
    }) => {
        return (
            <div className="row">
                <div className="header-search col-sm-8 col-md-8 col-lg-8">
                    <NavSearch search={search}  />
                </div>
                <div className="header-button col-sm-4 col-md-4 col-lg-4">
                    <button type="button" className="btn btn-sm btn-success btn-ask-question"> Ask New Question  </button>
                    <AuthModal
                        isAuthenticated={isAuthenticated}
                        signUp ={signUp}
                        signupResponse ={signupResponse}
                        signupFail ={signupFail}
                        signIn ={signIn}
                        signinFail ={signinFail}
                        />
                </div>
            </div>
        );
};

export default PlainHeader;