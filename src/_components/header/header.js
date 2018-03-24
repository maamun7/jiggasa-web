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
                            <div className="header-logo col-md-auto">
                                <span className="logo-text">  জিজ্ঞাসা..? </span>
                            </div>
                            <div className="header-search col-sm-8 col-md-8 col-lg-8">
                                <NavSearch search={search}  />
                            </div>
                            <div className="header-button col-md-auto">
                                <button type="button" className="btn btn-sm btn-success btn-ask-question"> Ask New Question  </button>
                                <button type="button" className="btn btn-sm btn-others"> Sign In  </button>
                            </div>
                        </div>
                    </div>
                </div>
                );


export default Header;