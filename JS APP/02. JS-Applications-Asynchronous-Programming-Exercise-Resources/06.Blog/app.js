function attachEvents() {

    let loadButton = document.getElementById('btnLoadPosts');
    loadButton.addEventListener('click', (e) => {
        const post = `http://localhost:3030/jsonstore/blog/posts`
        fetch(post)
        .then(res => {
            if (res.status !== 200) {
                throw new Error()
            }
            return res.json()
        })
        .then(action)
        .catch()

        function action(data) {
            let values = Object.values(data);
            values.forEach(e => {
                let option = document.createElement('option');
                option.value = e.id;
                option.text = e.title;
                document.getElementById('posts').add(option);
            });
        }
    })


    let viewButton = document.getElementById('btnViewPost')
    viewButton.addEventListener('click', (e) => {
        let keyId = e.target.parentNode.children[2].value;
        let url = `http://localhost:3030/jsonstore/blog/posts/${keyId}`;
        fetch(url)
        .then(res => {
            if (res.status !== 200) {
                throw new Error()
            }
            return res.json()
        })
        .then(data => {
            document.getElementById(`post-title`).textContent = `${data.title}`
            document.getElementById(`post-body`).textContent = `${data.body}`
        })
        .catch();

        let url2 = `http://localhost:3030/jsonstore/blog/comments`
        fetch(url2)
        .then(res => {
            if (res.status !== 200) {
                throw new Error()
            }
            return res.json()
        })
        .then(data => {
            let values = Object.values(data);
            let ul = document.getElementById(`post-comments`);
            ul.innerText =''
            for (const line of values) {
                if (line.postId === keyId) {
                    let li = document.createElement('li');
                    li.textContent = line.text;
                    li.id = line.id;
                    ul.appendChild(li)
                }
            }

        })
        .catch()
    })



}

attachEvents();