import React, { Component } from 'react';
import Header from '../../containers/Header/index';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from '../../containers/Home/';
import Test from '../../containers/Test/';

class Root extends Component {
    componentWillMount() {
        const { initAuth } = this.props;
        initAuth();
    }

    render() {
        return (  
            <div>
                <nav className="navbar navbar-default custom_nav">
                    <Header/>
                </nav>
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
