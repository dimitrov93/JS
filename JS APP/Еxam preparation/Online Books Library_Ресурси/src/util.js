export function getUserData(){
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function setUserData(data){
    sessionStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData(){
    sessionStorage.removeItem('userData');
}

export function getAccessToken() {
    const user = getUserData();
    if (user) {
        return user.accessToken;
    } else {
        return null;
    }
}

export function submitHandler(ctx, handler) {
    return function (e) {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        handler(ctx, formData, e)
    };
}