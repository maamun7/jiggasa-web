import React, { Component } from 'react';
//import Router from '../Router';
import Header from '../../containers/Header/index';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from '../../containers/Home/';
import Test from '../../containers/Test/';

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
                <div className="header-wrapper" >
                    <div className="container">
                        <Header/>
                    </div>
                </div>
                 <Router history={createHistory()}>
                     <Switch>
                         <Route exact path="/" component={Home} />
                         <Route path="/test" component={Test} />
                     </Switch>
                </Router>
                <div className="footer-wrapper" >
                </div>
            </div>
        );
    }
}

//Root.propTypes = propTypes;

export default Root;
