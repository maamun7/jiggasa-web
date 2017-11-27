import React from 'react';
import { connect } from 'react-redux';
import Header from '../_components/header/header';
import { getIsAuthenticated, getSessionUser } from '../_selectors/CommonSelectors';
import { login, register, logout } from '../_actions/SessionAction';
import { search } from '../_actions/HeaderAction';

const HeadContainer = props => <Header {...props} />;

const mapStateToProps = (state) => {
    console.log("state.session : ", state.session);
    return {
        isAuthenticated: getIsAuthenticated(state),
        user: getSessionUser(state),
        loginFail: state.session.loginFail
    }
};

export default connect(mapStateToProps, {
    login,
    register,
    logout,
    search,
})(HeadContainer);