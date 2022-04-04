export async function displayPosts() {
    const posts = Object.values(await getTheTopics())
    posts.forEach(x => {
        const topicContainer = document.querySelector('.topic-container')
        let div = document.createElement('div');
        let date = new Date()
        div.className = 'topic-name-wrapper';
        div.innerHTML = `
        <div class="topic-name">
                <a href="theme-content.html" class="normal">
                    <h2 id=${x._id}>${x.title}</h2>
                </a>
                <div class="columns">
                    <div>
                        <p>Date: <time>${date.toUTCString()}</time></p>
                        <div class="nick-name">
                            <p>Username: <span>${x.name}</span></p>
                        </div>
                    </div>
    
    
                </div>
            </div>
        `
        topicContainer.prepend(div)
    })
}


async function getTheTopics() {
    const url = `http://localhost:3030/jsonstore/collections/myboard/posts`;
    let res = await fetch(url)
    let data = await res.json();

    return data
}