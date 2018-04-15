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
            <div className="row">
                <div className="col-sm-3 col-md-3 col-lg-3">
                    
                </div>
                <div className="header-search col-sm-4 col-md-4 col-lg-4">
                    <NavSearch search={search}  />
                </div>
                <div className="col-sm-4 col-md-5 col-lg-5">
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
            </div>
        );
};

export default SessionHeader;