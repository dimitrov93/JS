import { clear } from "./clear.js";

const container = document.querySelector('.container');
const topic = container.querySelector('form')

export function releaseForm() {
    topic.addEventListener('submit', (e) => {
    
        if (e.submitter.textContent === 'Cancel') {
            clear();
        } else if (e.submitter.textContent === 'Post') {
            submit();
            clear();
        }
    })
}


function submit() {
    let formData = new FormData(topic);
    
    let title = formData.get('topicName');
    let name = formData.get('username');
    let post = formData.get('postText');

    if (title != '' && name != '' & post != '') {
        fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, name, post })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });

        createDiv(title, name, post);
    }




}

function createDiv(title, name, post) {
    const topicContainer = document.querySelector('.topic-container')
    let div = document.createElement('div');
    let date = new Date()
    div.className = 'topic-name-wrapper';
    div.innerHTML = `
    <div class="topic-name">
            <a href="#" class="normal">
                <h2>${title}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${date.toUTCString()}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${name}</span></p>
                    </div>
                </div>


            </div>
        </div>
    `
    topicContainer.appendChild(div)
}