import React, { Component} from 'react';
import LoginModal from '../../_components/form/LoginModal'
import NewModal from '../../_components/form/ModalEmpty'

const NavUser = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return (
            null
        );

    } else {
        return (
            <NewModal />

        );
    }

};

export default NavUser;