import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter as Router, browserHistory} from 'react-router-dom'
import routes from './routes';
import configureStore from './_store/confStore'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import App from './_components/App';

const store = configureStore();

render(
    <Provider store={store}>
        <App>
            <Router history={browserHistory} >{routes}</Router>
        </App>
    </Provider>,
document.getElementById('container'));
