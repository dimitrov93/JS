function attachEvents() {
    loadBtn = document.getElementById('btnLoad').addEventListener('click', loadInfo)
    createBtn = document.getElementById('btnCreate').addEventListener('click', createInfo)
}

function loadInfo() {
    const url = `http://localhost:3030/jsonstore/phonebook`;
    const ul = document.getElementById(`phonebook`);
    ul.innerHTML = '';
    fetch(url)
    .then(res => {
        if (res.status !== 200) {
            throw new Error('Something is wrong')
        }
        return res.json()
    })
    .then(data => {
        let values = Object.values(data);
        values.forEach(x => {
            let li = document.createElement('li');
            li.id =  x._id
            li.textContent = `${x.person}: ${x.phone}`
            let button = document.createElement('button');
            button.textContent = 'Delete';
            button.addEventListener('click', deleteBtn)
            li.appendChild(button);
            ul.appendChild(li)
        });
    })
}

async function deleteBtn(e) {
    const url = `http://localhost:3030/jsonstore/phonebook`;
    let id = e.target.parentNode.id;
    e.target.parentNode.remove();
    console.log(id);
    const delResponse = await fetch(`${url}/${id}`, {method:'DELETE',})
   
}

async function createInfo() {
    const url = `http://localhost:3030/jsonstore/phonebook`;

    let person = document.getElementById('person');
    let phone = document.getElementById('phone');

    if (person && phone) {
        let resp = await fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({person:person.value,phone:phone.value})
        })
    }

    person.value = '';
    phone.value = '';
}

attachEvents();