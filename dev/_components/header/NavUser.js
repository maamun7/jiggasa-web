import React, { Component} from 'react';
import LoginModal from '../../_components/form/LoginModal'

const NavUser = ({ isAuthenticated, authenticatedInfo }) => {
    if (isAuthenticated) {
        return (
            null
        );

    } else {
        return (
            <button className="btn btn-primary pull-right"> Sign </button>
        );
    }

};

export default NavUser;