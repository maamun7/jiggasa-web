import React from 'react';
import { connect } from 'react-redux';
import Header from '../_components/header/header';
import { getIsAuthenticated, getAuthenticatedInfo } from '../_utils/AuthHelper'

const HeadContainer = props => <Header {...props} />;

const mapStateToProps = (state) => ({
    isAuthenticated: getIsAuthenticated(state),
    authenticatedInfo: getAuthenticatedInfo(state),
    showLoginModal: showLoginModal(false)
});

export default connect(mapStateToProps, {
})(HeadContainer);