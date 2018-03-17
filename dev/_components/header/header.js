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
                    loginFail,
                    register,
                    logout,
                    search,

                }) => (
                <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                    <div className="container">
                        <img className="navbar-brand col-sm-3 col-md-2 mr-0" src={ require('../../../public/assets/img/logo.jpg') } height={35}/>
                        <NavSearch
                            search={search}
                        />

                        <ul className="navbar-nav px-3">
                            <li className="nav-item text-nowrap">
                                <a className="nav-link" href="#">Sign out</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                );


export default Header;