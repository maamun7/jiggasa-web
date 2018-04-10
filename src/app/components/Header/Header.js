import React, { Component} from 'react';
import { verifyAuthToken, getAuthInfo, doEmptyAuthSession } from '../../../utils/AuthHelper';
import SessionHeader from './SessionHeader';
import PlainHeader from './PlainHeader';

const Header = ({
                    isAuthenticated,
                    user,
                    signUp,
                    signupResponse,
                    signupFail,
                    signIn,
                    signinFail,
                    signOut,
                    search
                }) => (
                    <div className="row">
                        <div className="header-logo col-sm-2 col-md-2 col-lg-2">
                            <span className="logo-text">  জিজ্ঞাসা..? </span>
                        </div>
                        <div className="col-sm-10 col-md-10 col-lg-10">
                                { isAuthenticated ? (
                                    <SessionHeader            
                                        isAuthenticated={isAuthenticated}
                                        user ={user}
                                        search ={search}
                                        />
                                    ) : (
                                    <PlainHeader   
                                        isAuthenticated={isAuthenticated} 
                                        signUp ={signUp}
                                        signupResponse ={signupResponse}
                                        signupFail ={signupFail}
                                        signIn ={signIn}
                                        signinFail ={signinFail}
                                        signOut ={signOut} 
                                        search ={search}
                                        />
                                    )
                                }
                        </div>
                    </div>
                );
export default Header;