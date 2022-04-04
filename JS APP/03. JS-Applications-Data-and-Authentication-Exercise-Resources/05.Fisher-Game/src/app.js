window.addEventListener('load', async () => {
    const logOutBtn = document.getElementById('logout');
    logOutBtn.addEventListener('click', (e) => {

        localStorage.clear()
    });


    let username = localStorage.getItem('email');

    if (username) {
        console.log('ok');
    } else {
        console.log('not okay');
    }
})