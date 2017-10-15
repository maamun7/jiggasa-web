
export const saveAuthInfo = (authInfo) => {
    localStorage.setItem('auth', JSON.stringify(authInfo));
};

export const getAuthInfo = () => {
     return localStorage.getItem('auth');
};