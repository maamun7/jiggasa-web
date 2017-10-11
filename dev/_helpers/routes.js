import React  from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../_containers/homeContainer';
import Signin from '../_containers/entry/signinContainer';
import Signup from '../_containers/entry/signupContainer';
import Modal from '../_containers/testModalContainer';
//import App from './_components/App';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/modal" component={Modal} />
    </Switch>
);