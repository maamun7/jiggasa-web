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
            <span>
                <div className="col-sm-8 col-md-8 pull-left custom-nav-left">
                    <NavSearch search={search}  />
                </div>
                <div className="col-sm-2 col-md-2 pull-right custom-nav-right">
                    <ul className="nav navbar-nav navbar-right">
                        <button className="btn btn-sm btn-danger navbar-btn">Ask New Question</button>
                        <AuthModal
                            isAuthenticated={isAuthenticated}
                            signUp ={signUp}
                            signupResponse ={signupResponse}
                            signupFail ={signupFail}
                            signIn ={signIn}
                            signinFail ={signinFail}
                            />
                    </ul>
                </div>
            </span>
        );
};

export default PlainHeader;