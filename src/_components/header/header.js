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
                <div className="header-wrapper" >
                    <div className="container">
                        <div className="row">
                            <div className="header-logo col-md-2">  জিজ্ঞাসা..?
                                <span className="logo-text">  জিজ্ঞাসা..? </span>
                            </div>
                            <div className="header-search col-md-7">
                                <NavSearch search={search}  />
                            </div>
                            <div className="header-button col-md-3">
                                <button type="button" className="btn btn-sm btn-success"> Ask New Question  </button>
                                <button type="button" className="btn btn-sm"> Sign In  </button>
                            </div>
                        </div>
                    </div>
                </div>
                );


export default Header;