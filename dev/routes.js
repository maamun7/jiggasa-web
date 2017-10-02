import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/home/homePage';
import Signin from './components/users/signinPage';
import Signup from './components/users/signupPage';
import App from './components/App';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/Signin" component={Signin}></Route>
        <Route path="/Signup" component={Signup}></Route>
    </Route>
);