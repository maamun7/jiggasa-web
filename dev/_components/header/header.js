import React, { Component} from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, ButtonToolbar, DropdownButton }
from 'react-bootstrap';
import { verifyAuthToken, getAuthInfo, doEmptyAuthSession } from '../../_helpers/helper';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(event) {
        switch (event) {
            case 'LOGOUT':
                doEmptyAuthSession();
            default:
                return null;
        }
    }

    render() {
        let menu = null;
        let authInfo = getAuthInfo();
        if (authInfo != null) {
            menu = <DropdownButton title={authInfo.name} id="dropdown-size-medium" onSelect={this.handleOnSelect }>
                        <MenuItem eventKey="1">Profile</MenuItem>
                        <MenuItem eventKey="LOGOUT"> Logout </MenuItem>
                        <MenuItem divider />
                        <MenuItem> { authInfo.email } </MenuItem>
                    </DropdownButton>;

        }
        return (
            <div id="top-bar" className="full-width">
                <div className="col-lg-9 header-width">
                    <div className="logo">
                        <img src={ require('../../../public/assets/img/logo.jpg') } height={35}/>
                    </div>
                    { menu }
                </div>
            </div>
        );
    }
}

export default Header;