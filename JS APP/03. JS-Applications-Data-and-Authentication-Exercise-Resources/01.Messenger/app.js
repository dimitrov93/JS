const url = `http://localhost:3030/jsonstore/messenger`;
const msg = document.getElementById('messages');


function attachEvents() {

    document.getElementById('submit').addEventListener('click', postMsg)
    document.getElementById('refresh').addEventListener('click', loadAllMsg)
}


function loadAllMsg() {
    fetch(url)
    .then(res => {
        if (res.status !== 200) {
            throw new Error()
        }
        return res.json()
    })
    .then(data => {
        msg.value = Object.values(data).map(({author,content}) => `${author}: ${content}`).join(`\n`);
    })

}

async function postMsg() {

    const [author, content] = [document.querySelector('input[name="author"]').value, 
                               document.querySelector('input[name="content"]').value
                              ];
    if (author !== '' && content !== '') {
        await request(url,{author:author,content:content})
        author = '';
        content = '';
        
    } else {
        alert('Fields are empty')
    }
    // msg.value += `${author}: ${content}\n`
}

async function request(url,option) {
    if (option) {
        option = {
           method: "POST",
           headers: {'Content-Type': 'application/json'}, 
           body: JSON.stringify(option)
        };
   }

   const res = await fetch(url, option)

   return res.json()
}

attachEvents();