import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import { getIsAuthenticated, getSessionUser } from '../../../selectors/CommonSelectors';
import { login, loginFailure, loginSuccess, signUpFailure, signUpSuccess, logout }
    from '../../../actions/SessionAction';
    
import * as utils from '../../../utils/AppUtils';
import {  signUp, search } from './action';

const HeadContainer = props => <Header {...props} />;

const mapStateToProps = (state) => {
    return {
        isAuthenticated: getIsAuthenticated(state),
        user: getSessionUser(state),
        signupResponse: state.header.signupResponse,
        signupFail: state.header.signupFail,
        loginFail: state.header.loginFail
    }
};

export default connect(mapStateToProps, {
    signUp,
    login,
    logout,
    search
})(HeadContainer);