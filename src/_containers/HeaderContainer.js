import React from 'react';
import { connect } from 'react-redux';
import Header from '../_components/header/Header';
import { getIsAuthenticated, getSessionUser } from '../_selectors/CommonSelectors';
import { login, loginFailure, loginSuccess, signUp, signUpFailure, signUpSuccess, logout }
    from '../_actions/SessionAction';
import { search } from '../_actions/HeaderAction';

const HeadContainer = props => <Header {...props} />;

const mapStateToProps = (state) => {
    return {
        isAuthenticated: getIsAuthenticated(state),
        user: getSessionUser(state),
        loginFail: state.session.loginFail
    }
};

export default connect(mapStateToProps, {
    login,
    loginFailure,
    loginSuccess,
    signUp,
    signUpFailure,
    signUpSuccess,
    logout,
    search,
})(HeadContainer);