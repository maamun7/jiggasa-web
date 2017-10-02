import 'babel-polyfill';
import React from 'react';
//import { Provider } from 'react-redux';
import { render } from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
//import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import App from './components/App';

import Home from './components/home/homePage';
import Signin from './components/users/signinPage';
import Signup from './components/users/signupPage';

render(
    <App>
        <Router history={browserHistory}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="/Signin" component={Signin}></Route>
            <Route path="/Signup" component={Signup}></Route>
        </Router>
    </App>,
document.getElementById('container'));
