

export function viewPost() {
    const id = localStorage.getItem("id");

fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${id}`)
.then(res => res.json())
.then(data => {
    const theContainer = document.querySelector('.container')
    console.log(data);
theContainer.innerHTML = `
            <div class="theme-content">
                <!-- theme-title  -->
                <div class="theme-title">
                    <div class="theme-name-wrapper">
                        <div class="theme-name">
                            <h2>${data.title}</h2>

                        </div>

                    </div>
                </div>
                <!-- comment  -->

                <div class="comment">
                        <div class="header">
                            <img src="./static/profile.png" alt="avatar">
                            <p><span>${data.name}</span> posted on <time>2020-10-10 12:08:28</time></p>

                            <p class="post-content">${data.post}</p>
                        </div>
                    </div>

                </div>

        

            </div>`;

    let div = document.createElement('div');
    div.className = 'answer-comment';
    div.innerHTML = `       
    <p><span>currentUser</span> comment:</p>
    <div class="answer">
        <form>
            <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
            <div>
                <label for="username">Username <span class="red">*</span></label>
                <input type="text" name="username" id="username">
            </div>
            <button>Post</button>
        </form>
    </div>
</div>`;
let wrapper = theContainer.querySelector('.theme-content')
wrapper.appendChild(div)   
})
.catch(err => console.log(err));
};


export function addComment() {
    let commentID = localStorage.getItem("id");
    let answerContainer = document.querySelector('.answer');
    let answerForm = answerContainer.querySelector('form');
    let formData = new FormData(answerForm);
    let comment = formData.get('postText');
    let username = formData.get('username');

    const url = `http://localhost:3030/jsonstore/collections/myboard/comments`;
    
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({comment,username, commentID})
    })
    .then(res => res.json())
    .then(r => console.log(r))
    .catch(err => console.log(err));
}


export function renderComments() {
    fetch('http://localhost:3030/jsonstore/collections/myboard/comments')
    .then(res => res.json())
    .then(r => {
        let comms = Object.values(r);
        comms.forEach(c => {
            let comm = Object.values(c);
            let commentID = comm[2];
            const id = localStorage.getItem("id");
            
            if (id === commentID) {
                let comments = document.querySelector('.comment')
                let newDate = new Date();
                let userComment = document.createElement('div');
                userComment.id = 'user-comment';
                userComment.innerHTML = `<div class="topic-name-wrapper">
                <div class="topic-name">
                    <p><strong>${c.username}</strong> commented on <time>${newDate.toUTCString()}</time></p>
                    <div class="post-content">
                        <p>${c.comment}</p>
                    </div>
                </div>
            </div>`
                comments.appendChild(userComment);
            }

          });
        })   
    .catch(err => console.log(err))
}