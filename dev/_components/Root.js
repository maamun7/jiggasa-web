//import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Router from '../_components/Router'
import Header from '../_containers/HeaderContainer'

class Root extends Component {
    componentWillMount() {
        const { initAuth, initRouter, paths } = this.props;
        initAuth();
        initRouter(paths);
    }

    render() {
        const { router, routes } = this.props;
        console.log("Root props : ", this.props);
        return (
            <div>
                <Header/>
                <Router router={router} routes={routes} />
                <h1> ## </h1>
            </div>
        );
    }
}

//Root.propTypes = propTypes;

export default Root;
