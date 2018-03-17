import React from 'react';
import { connect } from 'react-redux';
import Test from '../_components/Test';
import { routerCons } from '../_constants';
import { initRouter } from '../_actions/RouterActions';
import { initAuth } from '../_actions/SessionAction';

const TestContainer = props => <Test {...props} />;

const mapStateToProps = (state) => {
  return {

    };
};

export default connect(mapStateToProps, {
})(TestContainer);
