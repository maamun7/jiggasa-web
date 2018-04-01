import React from 'react';
import { connect } from 'react-redux';
import Test from '../../components/Test';
import { routerCons } from '../../../constants/index';
import { initRouter } from '../../../actions/RouterActions';
import { initAuth } from '../../../actions/SessionAction';

const TestContainer = props => <Test {...props} />;

const mapStateToProps = (state) => {
  return {

    };
};

export default connect(mapStateToProps, {
})(TestContainer);
