import React, { Component} from 'react';
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
                    <div className="row">
                        <div className="header-logo col-sm-2 col-md-2 col-lg-2">
                            <span className="logo-text">  জিজ্ঞাসা..? </span>
                        </div>
                        <div className="header-search col-sm-7 col-md-7 col-lg-7">
                            <NavSearch search={search}  />
                        </div>
                        <div className="header-button col-sm-3 col-md-3 col-lg-3 text-right">
                            <button type="button" className="btn btn-sm btn-success btn-ask-question"> Ask New Question  </button>
                            <NavUser />
                        </div>
                    </div>
                );
export default Header;