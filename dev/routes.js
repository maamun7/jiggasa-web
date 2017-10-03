import React  from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/homePage';
import Signin from './components/users/signinPage';
import Signup from './components/users/signupPage';
//import App from './components/App';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
    </Switch>
);