//import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Router from '../_components/Router'
import Header from '../_containers/HeaderContainer'

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
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <Router router={router} routes={routes} />
                        <h2> Amar sonar bangla </h2>
                    </div>
                </div>
            </div>
        );
    }
}

//Root.propTypes = propTypes;

export default Root;
