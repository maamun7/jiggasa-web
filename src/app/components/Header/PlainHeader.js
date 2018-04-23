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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="col-md-9 col-lg-9">                    
                    <NavSearch search={search}  />
                </div>
                <div className="col-md-3 col-lg-3">
                    <ul className="navbar-nav my-lg-0 justify-content-end">
                        <div className="d-flex flex-row justify-content-center">
                            <li className="nav-item mr-3"><a href="#"><button className="btn btn-danger btn-sm my-2 my-sm-0" type="submit">Ask New Question</button></a></li>
                            <AuthModal
                                isAuthenticated={isAuthenticated}
                                signUp ={signUp}
                                signupResponse ={signupResponse}
                                signupFail ={signupFail}
                                signIn ={signIn}
                                signinFail ={signinFail}
                            />                       
                        </div>
                    </ul>
                </div>
            </div>
        );
};

export default PlainHeader;