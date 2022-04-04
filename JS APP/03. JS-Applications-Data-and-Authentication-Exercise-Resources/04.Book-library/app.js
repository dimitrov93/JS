function solve() {

    document.getElementById('loadBooks').addEventListener('click',  (e) => {
        let books = document.querySelector('table tbody')
        books.innerText = ''
        const url = `http://localhost:3030/jsonstore/collections/books/`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            Object.entries(data).forEach(x =>{ 
                let b = x[1]
                let editBtn = document.createElement('button')
                editBtn.textContent = 'Edit';
                editBtn.id = 'editBtn';
                editBtn.addEventListener('click', editFun);
                let deleteBtn = document.createElement('button')
                deleteBtn.textContent = 'Delete';
                deleteBtn.id = 'deleteBtn';
                deleteBtn.addEventListener('click', deleteFun);
    
                let tr = document.createElement('tr');
                let tdTitle = document.createElement('td');
                tdTitle.textContent = b.title;
                tr.appendChild(tdTitle);
    
                let tdAuthor = document.createElement('td');
                tdAuthor.textContent = b.author;
                tr.appendChild(tdAuthor);
    
                
                let tdButtons = document.createElement('td');
                tdButtons.appendChild(editBtn);
                tdButtons.appendChild(deleteBtn);
                tr.appendChild(tdButtons);
                tr.id = x[0];
    
                books.appendChild(tr)
            })
        })
        .catch()
    })

    document.querySelector('form button').addEventListener('click', (e) => {
        if (e.target.textContent == 'Submit') {
            let title = document.querySelector('input[name="title"]').value;
            let author = document.querySelector('input[name="author"]').value;
         
            if (title === '' || author === '') {
                e.preventDefault()
                return alert('Error in inputs')
            }
    
            const url = `http://localhost:3030/jsonstore/collections/books`;
            let data = {title:title,author:author}
            fetch(url, {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {console.log('Success:', data);})
            .catch((error) => {console.error('Error:', error);});
            title = '';
            author = '';  
        } 

    })


    function deleteFun(e) {
        let id = e.target.parentNode.parentNode.id;
        const url = `http://localhost:3030/jsonstore/collections/books/${id}`;
        e.target.parentNode.parentNode.remove()
        fetch(url, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(null)
          })
    }

    function editFun(e) {
        let id = e.target.parentNode.parentNode.id
        let title = e.target.parentNode.parentNode.cells[0].textContent;
        let author = e.target.parentNode.parentNode.cells[1].textContent;
        document.querySelector('input[name="title"]').value = title;
        document.querySelector('input[name="author"]').value = author;
        document.querySelector('form h3').textContent = 'Edit FORM';
        document.querySelector('form button').textContent = 'Save';
        document.querySelector('form button').addEventListener('click', (e)=>{
            let title2 = document.querySelector('input[name="title"]').value;
            let author2 = document.querySelector('input[name="author"]').value;
            const url = `http://localhost:3030/jsonstore/collections/books/${id}`;
            let data = {title:title2,author:author2}
            fetch(url, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
        })
    }
}

solve()