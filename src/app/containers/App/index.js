import React from 'react';
import { connect } from 'react-redux';
import Root from '../../components/App/index';
import { initAuth } from '../../containers/Header/action';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
  return { };
};

export default connect(mapStateToProps, {
    initAuth
})(RootContainer);
