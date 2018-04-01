import React  from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './app/containers/Home/';
import Test from './app/containers/Test/';

const routes = (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/test" component={Test}/>
    </Switch>
)

export default routes;
