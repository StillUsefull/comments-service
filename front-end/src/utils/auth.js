export const getToken = () => localStorage.getItem('token');
export const getWsId = () => localStorage.getItem('wsId');
export const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('wsId');
    window.location.href = '/login';
}