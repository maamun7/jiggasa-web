import React from 'react';
import { connect } from 'react-redux';

import Root from '../_components/Root';

import { routerCons } from '../_constants';
import HomeContainer from '../_containers/HomeContainer';
import LoginContainer from '../_containers/LoginContainer';

const RootContainer = props => <Root {...props} />;


const mapStateToProps = (state) => {
  const { router } = state;

    console.log("State : ",state );

  return {
        paths: [
            routerCons.INDEX_PATH,
            routerCons.LOGIN,
            routerCons.REGISTER
        ],
        router,
        routes: {
          [routerCons.INDEX_PATH]: HomeContainer,
          [routerCons.LOGIN]: LoginContainer,
          [routerCons.REGISTER]: ''
        }
    };
};



const mapDispatchToProps = (dispatch) => {
    return {
        //dispatch({type: CHANGE_ROUTE, router: router})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);