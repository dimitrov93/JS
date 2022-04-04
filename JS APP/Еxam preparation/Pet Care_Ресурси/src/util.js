export function getUserData(){
    return JSON.parse(localStorage.getItem('user'));
}

export function setUserData(data){
    localStorage.setItem('user', JSON.stringify(data));
}

export function clearUserData(){
    localStorage.removeItem('user');
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