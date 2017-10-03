import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, browserHistory} from 'react-router-dom'
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import App from './components/App';

render(
    <App>
        <Router history={browserHistory} >{routes}</Router>
    </App>,
document.getElementById('container'));
