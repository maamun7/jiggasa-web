import React from 'react';
import { connect } from 'react-redux';
import Root from '../../components/App/index';
import { routerCons } from '../../../constants/index';
import { initRouter } from '../../../actions/RouterActions';
import { initAuth } from '../../../actions/SessionAction';
import HomeContainer from '../Home/index';
import LoginContainer from '../Test/LoginContainer';
import TestContainer from '../Test/index';

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
