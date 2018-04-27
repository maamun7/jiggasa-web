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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#"><i className="fa fa-home" title="Home" aria-hidden="true"></i> Home <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#"><i className="fa fa-edit" title="Home" aria-hidden="true"></i> Answer</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#"><i className="fa fa-bell" title="Home" aria-hidden="true"></i> Notification</a>
						</li>						
					</ul>
					<div className="col-md-5 col-lg-5">
                        <NavSearch search={search}  />
					</div>
					<div className="col-md-3 col-lg-3 ml-auto">
						<NavUser isAuthenticated={isAuthenticated} signOut={signOut} />
					</div>					
				</div>
            );
};

export default SessionHeader;