import React  from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home/homePage';
import Signin from './components/users/signinPage';
import Signup from './components/users/signupPage';
//import App from './components/App';

export default (
    <Route path="/" component={Home}>
        <Route path="/signin" component={Signin}></Route>
        <Route path="/signup" component={Signup}></Route>
    </Route>
);