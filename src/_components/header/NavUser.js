import React from 'react';
import OpenModal from '../../_components/form/ModalEmpty'

const NavUser = ({
    isAuthenticated,
    user,
    login,
    loginFail,
    register,
    logout,
    }) => {
    if (isAuthenticated) {
        return (
            null
        );

    } else {
        return (
            <OpenModal
                isAuthenticated={isAuthenticated}
                user={user}
                login={login}
                loginFail={loginFail}
                register={register}
                logout={logout}
                height="415px"/>
        );
    }

};

export default NavUser;