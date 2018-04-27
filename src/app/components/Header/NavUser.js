import React from 'react';
import AuthModal from '../Form/AuthModal';
import SessionInfo from '../Header/SessionInfo';

class NavUser extends React.Component {

    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.signOut();
    }

    render() {
        if (this.props.isAuthenticated ) {
            return (
                <ul className="navbar-nav my-lg-0 justify-content-end">
                    <div className="d-flex flex-row justify-content-center">
                        <li className="nav-item dropdown user_image">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="https://lh3.googleusercontent.com/-m9ETQ1gFbG8/AAAAAAAAAAI/AAAAAAAAAAA/ACLGyWADq_WQAX94qs5ikBhhTLAxRdI_nA/s32-c-mo/photo.jpg" />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" onClick={this.handleLogout}>Sign out</a>
                            </div>
                        </li>
                        <li className="nav-item"><button className="btn btn-sm my-2 my-sm-0 btn-danger" type="submit">Add Question</button></li>
                    </div>
                </ul>
            );
        } else {
            return (
            ''  
            );
        }
    }
}

export default NavUser;