import React from 'react';
import NewModal from '../../_components/form/ModalEmpty'

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
            <NewModal  isAuthenticated={isAuthenticated}
                       user={user}
                       login={login}
                       loginFail={loginFail}
                       register={register}
                       logout={logout} />

        );
    }

};

export default NavUser;