import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
/*import { BrowserRouter as Router, browserHistory} from 'react-router-dom'*/
/*import routes from './routes';*/
/*import configureStore from './_store/confStore'*/
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import  configureStore from './_store/confStore';
import App  from './_components/App';
import RootContainer from './_containers/RootContainer'
/*render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));*/


ReactDOM.render(
    <Provider store={ configureStore() }>
        <RootContainer />
    </Provider>,
    document.getElementById('app')
);