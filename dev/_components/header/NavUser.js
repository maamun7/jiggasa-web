import React, { Component} from 'react';
import LoginModal from '../../_components/form/LoginModal'

const NavUser = ({ isAuthenticated, openModal }) => {
    if (isAuthenticated) {
        return (
            null
        );

    } else {
        return (
            <button className="btn btn-primary pull-right" onClick={ openModal }> Sign </button>
        );
    }

};

export default NavUser;