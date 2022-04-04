export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function setUserData(data) {
    sessionStorage.getItem('userData', JSON.stringify(data));
}

export function clearUserData() {
    sessionStorage.removeItem('userData');
}
