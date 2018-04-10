import React from 'react';
import AuthModal from '../Form/AuthModal';
import SessionInfo from '../Header/SessionInfo';
import NavSearch from './NavSearch';
import NavUser from './NavUser';

const SessionHeader = ({
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
            <span>
                <div className="header-search col-sm-7 col-md-7 col-lg-7">
                    <NavSearch search={search}  />
                </div>
                <div className="header-button col-sm-3 col-md-3 col-lg-3 text-right">
                    <button type="button" className="btn btn-sm btn-success btn-ask-question"> Ask New Question  </button>
                    <NavUser
                        isAuthenticated={isAuthenticated}
                        user ={user}
                        signUp ={signUp}
                        signupResponse ={signupResponse}
                        signupFail ={signupFail}
                        signIn ={signIn}
                        signinFail ={signinFail}
                        signOut ={signOut}
                    />
                </div>
            </span>
        );
};

export default SessionHeader;