import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './scss/style.scss';
import  configureStore from './_store/confStore';
import RootContainer from './_containers/RootContainer';
import  'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={ configureStore() }>
        <RootContainer />
    </Provider>,
    document.getElementById('app')
);