import {html, render} from '../node_modules/lit-html/lit-html.js'

const url = `http://localhost:3030/jsonstore/collections/books`;
const root = document.querySelector('body');

const template = () => html`
    <button id="loadBooks">LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody> 
        
        </tbody>

    </table>

    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>

    <form id="edit-form" style="display: none">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>
`;

update()
function update() {
    const result = template();
    render(result, root)
}

async function getDetails() {
    const result = await fetch(url)
    return Object.values(await result.json())
}

document.getElementById('loadBooks').addEventListener('click', addBooks) 

async function addBooks(e) {
    update()
    e.preventDefault();
    const tbody = document.querySelector('body tbody');
    const options = await getDetails();
    let result = fetchingBooks(options)

    render(result, tbody)
}

const fetchingBooks = (options) => html`
 ${options.map(e => html`
 <tr id=${e._id}>
     <td>${e.title}</td>
     <td>${e.author}</td>
     <td>
         <button @click=${customizeRow}>Edit</button>
         <button @click=${customizeRow}>Delete</button>
     </td>
 </tr>
 `)}
`;

document.getElementById('add-form').querySelector('input[type="submit"]').addEventListener('click', (e) => {
    let url = `http://localhost:3030/jsonstore/collections/books`;
    e.preventDefault()
    let inputs = document.querySelectorAll('input[type="text"]')
    let title = inputs[0];
    let author = inputs[1];
   
    if (title.value && author.value) {
        let data = {author:author.value,
            title:title.value}
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
         console.log('Success:', data);
        })
        .catch((error) => {
         console.error('Error:', error);
        });

        title.value = '';
        author.value = '';
    }

})


function customizeRow(e) {

    if (e.target.textContent == 'Delete') {
        let parentID = e.target.parentNode.parentNode.id
        const url = `http://localhost:3030/jsonstore/collections/books/${parentID}`
        fetch(url, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(null)
          })
          e.target.parentNode.parentNode.remove()
    } else if (e.target.textContent == 'Edit') {
        let parentID = e.target.parentNode.parentNode.id
        document.getElementById('add-form').style.display ='none';
        document.getElementById('edit-form').style.display ='block';
        let title = e.target.parentNode.parentNode.children[0].textContent;
        let author = e.target.parentNode.parentNode.children[1].textContent;
        let inputs = document.getElementById('edit-form').querySelectorAll('input')
        inputs[1].value = title;
        inputs[2].value = author;
        let saveBtn = inputs[3];
        saveBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const url = `http://localhost:3030/jsonstore/collections/books/${parentID}`
            let data = {author:inputs[2].value,
                title:inputs[1].value}
            fetch(url, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
             console.log('Success:', data);
            })
            .catch((error) => {
             console.error('Error:', error);
            });

            inputs[1].value = '';
            inputs[2].value = '';
            document.getElementById('add-form').style.display ='block';
            document.getElementById('edit-form').style.display ='none';
            addBooks(e)

        })
    }
}
