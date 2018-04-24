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
                        <a className="navbar-brand text-danger"><b>Jiggasha</b></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>                        
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
                );
export default Header;