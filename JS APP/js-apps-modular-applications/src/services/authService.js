const baseUrl = 'http://localhost:3030/users';

const save = (user) => {
    if (user) {
        localStorage.setItem('accessToken', user.accessToken);
        localStorage.setItem('email', user.email);
        localStorage.setItem('username', user.username);
        localStorage.setItem('_id', user._id);
    }
};

export const login = (email, password) => {
    return fetch(`${baseUrl}/login`, {
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

export const register = (email, password, username) => {
    return fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password, username})
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
    let username = localStorage.getItem('username');
    let email = localStorage.getItem('email');
    
    let user = {
        username,
        email,
    };

    return user;
}

export const logout = () => {
    let accessToken = localStorage.getItem('accessToken');

    return fetch(`${baseUrl}/logout`, {
        headers: {
            'X-Authorization': accessToken
        }
    })
        .then(res => {
            console.log(res);

            localStorage.clear();
        });
};