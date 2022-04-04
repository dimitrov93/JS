function lockedProfile() {
    const main = document.getElementById('main');
    const url = `http://localhost:3030/jsonstore/advanced/profiles`;
    fetch(url)
    .then(res => {
        if (res.status !== 200) {
            throw new Error()
        }
        return res.json();
    })
    .then(data => {
        let values = Object.entries(data);
        let firstOne = values.shift();
        document.querySelector('input[name="user1Username"]').value = firstOne[1].username;
        document.querySelector('input[name="user1Email"]').value = firstOne[1].email;
        document.querySelector('input[name="user1Age"]').value = firstOne[1].age;

        values.forEach(e => {
            let profile = document.querySelector('.profile');
            let profileClone = profile.cloneNode(true);

            profileClone.querySelector('input[name="user1Email"]').value = e[1].email;
            profileClone.querySelector('input[name="user1Age"]').value = e[1].age;
            profileClone.querySelector('input[name="user1Username"]').value = e[1].username;

            main.appendChild(profileClone)
        });

        let buttons = document.querySelectorAll('button');
        buttons.forEach(b => {
            b.addEventListener('click', (e) => {
                let checked = e.target.parentElement.querySelectorAll('input[type="radio"]')[1]
                let hidden = e.target.parentElement.getElementsByTagName('div')[0];


                if (hidden.classList.contains('hiddenInfo')) {
                    if (e.target.textContent === "Show more" && checked.checked) {
                        hidden.classList.remove('hiddenInfo');
                        e.target.textContent = 'Hide it'
                    }
                } else {
                    e.target.textContent = 'Show more'

                    hidden.classList.add('hiddenInfo');
                }

            })
        });
    })
    .catch()

}