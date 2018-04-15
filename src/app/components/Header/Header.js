import React, { Component} from 'react';
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
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#"><span className="text-danger">Jiggasha</span></a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            { isAuthenticated ? (
                                <SessionHeader            
                                    isAuthenticated={isAuthenticated}
                                    user ={user}
                                    search ={search}
                                    signOut ={signOut} 
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