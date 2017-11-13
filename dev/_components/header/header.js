import React, { Component} from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, ButtonToolbar, DropdownButton }
from 'react-bootstrap';
import { verifyAuthToken, getAuthInfo, doEmptyAuthSession } from '../../_utils/AuthHelper';
import NavSearch from './NavSearch';
import NavUser from './NavUser';

const Header = ({
                    isAuthenticated,
                    user,
                    login,
                    register,
                    logout,
                    search,
                    openModal,
                }) => (
    <div id="top-bar" className="full-width">
        <div className="col-lg-9 header-width">
            <div className="logo col-lg-3">
                <img src={ require('../../../public/assets/img/logo.jpg') } height={35}/>
            </div>
            <div className="col-lg-6">
                <NavSearch/>
            </div>
            <div className="col-lg-3">
                <NavUser
                    isAuthenticated={isAuthenticated}
                    user={user}
                    openModal={openModal}
                />
            </div>
        </div>
    </div>
);


export default Header;