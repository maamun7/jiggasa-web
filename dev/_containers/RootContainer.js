import React from 'react';
import { connect } from 'react-redux';

import Root from '../_components/Root';

import { routerCons } from '../_constants/index';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
  const { router } = state;

  return {
    paths: [
        routerCons.INDEX_PATH,
        routerCons.LOGIN,
        routerCons.REGISTER
    ],
    router,
    routes: {
      [routerCons.INDEX_PATH]: '',
      [routerCons.LOGIN]: '',
      [routerCons.REGISTER]: ''
    }
};
};


const mapDispatchToProps = (dispatch) => {
    return {
        oman : ''
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
