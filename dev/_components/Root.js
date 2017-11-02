//import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Router from '../_components/Router'
/*
const propTypes = {

};*/

class Root extends Component {
  componentWillMount() {

  }

  render() {
    const { router, routes } = this.props;

      console.log("--- : ", this.props);
    return (
      <div>
        <Router router={router} routes={routes} />
        <h1> ## </h1>
      </div>
    );
  }
}

//Root.propTypes = propTypes;

export default Root;
