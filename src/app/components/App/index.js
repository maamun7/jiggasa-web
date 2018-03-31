import React, { Component } from 'react';
import Router from '../Router';
import Header from '../../containers/Header/index';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Routes from '../../../routes';


class Root extends Component {
    componentWillMount() {
        const { initAuth, initRouter, paths } = this.props;
        console.log("Path :", paths);
        initAuth();
        initRouter(paths);
    }

    render() {
        const { router, routes } = this.props;
        console.log("Root props : ", this.props);
        return (
            <div className="site-wrapper">
                {/*<Router router={router} routes={routes} />*/}
                <BrowserRouter history={createHistory()}>
                    <Routes />
                </BrowserRouter>
                <div className="header-wrapper" >
                    <div className="container">
                        <Header/>
                    </div>
                </div>
                <div className="footer-wrapper" >
                </div>
            </div>
        );
    }
}

//Root.propTypes = propTypes;

export default Root;
