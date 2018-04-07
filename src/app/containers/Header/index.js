import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import { getIsAuthenticated, getSessionUser } from '../App/selectors';
import * as utils from '../../../utils/AppUtils';
import {  signUp, search } from './action';
import {  signIn, signOut } from '../App/action';

const HeadContainer = props => <Header {...props} />;

const mapStateToProps = (state) => {
    console.log('State in header  :', state);
    return {
        isAuthenticated: getIsAuthenticated(state),
        user: getSessionUser(state),
        signupResponse: state.header.signupResponse,
        signupFail: state.header.signupFail,
        signinFail: state.session.signinFail
    }
};

export default connect(mapStateToProps, {
    signUp,
    signIn,
    signOut,
    search
})(HeadContainer);