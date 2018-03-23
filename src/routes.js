import React  from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './_containers/home.container';
import Signin from './_containers/users/login.container';
import Signup from './_containers/users/register.container';
import Modal from './_containers/testModalContainer';
//import App from './_components/App';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/modal" component={Modal} />
    </Switch>
);