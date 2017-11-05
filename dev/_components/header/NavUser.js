import React, { Component} from 'react';

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