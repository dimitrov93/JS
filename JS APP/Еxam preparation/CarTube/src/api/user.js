import * as api from '../api/api.js';
import { clearUserData, setUserData } from '../util.js';

const endpoints = {
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout',
}

export async function login(username, password) {
    const result = await api.post(endpoints.login, {username, password} );
    setUserData(result);

    return result;
};

export async function register(username, password) {
    const result = await api.post(endpoints.register, {username, password} );
    setUserData(result);

    return result;
};

export async function logout() {
    api.get(endpoints.logout);
    clearUserData();
};