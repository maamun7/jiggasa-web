import PropTypes from 'prop-types';
import React, { Component } from 'react';

const propTypes = {

};

class Root extends Component {
  componentWillMount() {

  }

  render() {
    const { router, routes } = this.props;
    return (
      <div>
        <h1> Amar sonar Bangla </h1>
      </div>
    );
  }
}

//Root.propTypes = propTypes;

export default Root;
