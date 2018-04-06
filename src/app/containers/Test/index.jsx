import React from 'react';
import { connect } from 'react-redux';
import Test from '../../components/Test';

const TestContainer = props => <Test {...props} />;

const mapStateToProps = (state) => {
  return {

    };
};

export default connect(mapStateToProps, {
})(TestContainer);
