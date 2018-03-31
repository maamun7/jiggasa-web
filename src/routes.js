import React  from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './app/containers/Home/';
import Signin from './app/containers/users/login.container';
import Signup from './app/containers/users/register.container';
import Modal from './app/containers/Test/testModalContainer';
//import App from './components/App';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/modal" component={Modal} />
    </Switch>
);