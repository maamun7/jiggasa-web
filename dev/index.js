import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/style.scss';


render(<App />, document.getElementById('main'));

