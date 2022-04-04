const baseUrl = 'http://localhost:3030/users';

const save = (user) => {
    if (user) {
        localStorage.setItem('accessToken', user.accessToken);
        localStorage.setItem('email', user.email);
        localStorage.setItem('_id', user._id);
    }
};

export const login = (email, password) => {
    return fetch(`${baseUrl}/login`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
        .then(res => res.json())
        .then(user => {
            save(user);
            return user;
        });
};

export const isAuthenticated = () => {
    let accessToken = localStorage.getItem('accessToken');
    
    return Boolean(accessToken);
};

export const getUser = () => {
    let accessToken = localStorage.getItem('accessToken');
    let email = localStorage.getItem('email');
    let id = localStorage.getItem('_id');
    
    let user = {
        accessToken,
        email,
        id
    };

    return user;
}

export const logout = (ctx) => {
    let accessToken = localStorage.getItem('accessToken');
    return fetch(`${baseUrl}/logout`, {
        headers: {
            'X-Authorization': accessToken
        }
    })
        .then(res => {
            localStorage.clear();
        });
};

export const register = (email, password) => {
    return fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
        .then(res => res.json())
        .then(user => {
            save(user);

            return user;
        });
};