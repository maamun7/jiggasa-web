import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  'bootstrap';
import './assets/styles/scss/style.scss';
import 'font-awesome/css/font-awesome.min.css';
import  configureStore from './configStore';
import RootContainer from './app/containers/App/';
import  'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={ configureStore() }>
        <RootContainer />
    </Provider>,
    document.getElementById('app')
);