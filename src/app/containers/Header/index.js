import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import { getIsAuthenticated, getSessionUser } from './selectors';
import * as utils from '../../../utils/AppUtils';
import {  signUp, signIn, signOut, search } from './action';

const HeadContainer = props => <Header {...props} />;

const mapStateToProps = (state) => {
    return {
        isAuthenticated: getIsAuthenticated(state),
        user: getSessionUser(state),
        signupResponse: state.header.signupResponse,
        signupFail: state.header.signupFail,
        signinFail: state.header.signinFail
    }
};

export default connect(mapStateToProps, {
    signUp,
    signIn,
    signOut,
    search
})(HeadContainer);