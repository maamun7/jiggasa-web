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
                <ul className="nav navbar-nav">
                    <li className="current_nav_link"><a href="#"><i class="fa fa-home"></i> Home </a></li>
                    <li className=""><a href="#"><i class="fa fa-edit"></i> Answer</a></li>
                    <li className=""><a href="#"><i class="fa fa-bell"></i> <span>Notification</span></a></li>
                </ul>
                <div className="col-sm-5 col-md-5 pull-left">
                    <NavSearch search={search}  />
                </div>
                <div className="col-sm-3 col-md-3 pull-right custom-nav-right">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown user_image">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src="https://lh3.googleusercontent.com/-m9ETQ1gFbG8/AAAAAAAAAAI/AAAAAAAAAAA/ACLGyWADq_WQAX94qs5ikBhhTLAxRdI_nA/s32-c-mo/photo.jpg" /></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="index_logout.html">Logout</a></li>
                            </ul>
                        </li>
                        <li className=""><button className="btn btn-sm btn-danger navbar-btn">Add Question</button></li>
                    </ul>
                </div>
            </span>
        );
};

export default SessionHeader;