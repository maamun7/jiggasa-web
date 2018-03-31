import React  from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './app/_containers/Home.container';
import Signin from './app/_containers/users/login.container';
import Signup from './app/_containers/users/register.container';
import Modal from './app/_containers/Test/testModalContainer';
//import App from './_components/App';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/modal" component={Modal} />
    </Switch>
);