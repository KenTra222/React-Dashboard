import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
    // rusn when users attemps to login
    login: ({username, password}) => {
        if (username === 'admin' && password === 'password'){
            localStorage.setItem('username', username);
            return Promise.resolve()
        } else {
            return Promise.reject()
        }
    }, 
    //runs when log out
    logout: () => {
        // remove username
        localStorage.removeItem('username')
        return Promise.resolve();
    },
    // runs when API retuns error
    checkError: ({status}: {status: number}) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve()
    },
    // Runs when the user navigates to a new location to check for auth
    checkAuth: () => {
        return localStorage.getItem('username') ? Promise.resolve() : Promise.reject()
    }, 
    // Tuns when user navigates to a new location to check for permissions or rules
    getPermission: () => Promise.resolve(),
}    