import React from 'react';
import { connect } from 'react-redux';
import Root from '../_components/Root';
import { routerCons } from '../_constants';
import { initRouter } from '../_actions/RouterActions';
import { initAuth } from '../_actions/SessionAction';
import HomeContainer from '../_containers/HomeContainer';
import LoginContainer from '../_containers/LoginContainer';
import TestContainer from './TestContainer';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
  const { router } = state;

  return {
        paths: [
            routerCons.INDEX_PATH,
            routerCons.LOGIN,
            routerCons.REGISTER,
            routerCons.TEST
        ],
        router,
        routes: {
          [routerCons.INDEX_PATH]: HomeContainer,
          [routerCons.LOGIN]: LoginContainer,
          [routerCons.REGISTER]: '',
          [routerCons.TEST]: TestContainer,
        }
    };
};

export default connect(mapStateToProps, {
    initAuth,
    initRouter,
})(RootContainer);
