import React  from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './_components/home/homePage';
import Signin from './_containers/entry/signinContainer';
import Signup from './_containers/entry/signupContainer';
//import App from './_components/App';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
    </Switch>
);