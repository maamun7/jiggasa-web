import React, { Component} from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { verifyAuthToken, getAuthInfo } from '../../_helpers/helper';

class Header extends React.Component {

    render() {
        let menu = null;
        let authInfo = getAuthInfo();
        if (authInfo != null) {
            menu = <Navbar>
                <Nav>
                    <NavDropdown eventKey={3} title={authInfo.name} id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}> Logout </MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>;

        }
        return (

            <div>
            <div id="top-bar" className="full-width">
                <div className="col-lg-9 header-width">
                    <div className="logo">
                        <img src={ require('../../../public/assets/img/logo.jpg') } height={35}/>
                    </div>
                </div>
            </div>
                { menu }
            </div>


        );
    }
}

export default Header;