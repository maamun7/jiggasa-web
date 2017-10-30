import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
/*import { BrowserRouter as Router, browserHistory} from 'react-router-dom'*/
/*import routes from './routes';*/
/*import configureStore from './_store/confStore'*/
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import { store } from './_helpers';
import App  from './_components/App';

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));
