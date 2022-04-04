const loginSection = document.querySelector('#login-view');
const loginForm = loginSection.querySelector('#login');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let username = formData.get('email');
    let password = formData.get('password');

    let data = {
        email: username,
        password
    };

    fetch('http://localhost:3030/users/login', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(user => {
            console.log(user);
        })
})