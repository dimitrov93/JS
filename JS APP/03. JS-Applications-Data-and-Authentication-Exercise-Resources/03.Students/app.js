function solve() {
    let tables = document.querySelector('tbody');
    const url = `http://localhost:3030/jsonstore/collections/students`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        Object.values(data).forEach(x => {
            let tr = document.createElement('tr');

            const firstNameCell = tr.insertCell(0);
            const secondNameCell = tr.insertCell(1);
            const facNum = tr.insertCell(2);
            const grade = tr.insertCell(3);
            firstNameCell.innerText = x.firstName
            secondNameCell.innerText = x.lastName
            facNum.innerText = x.facultyNumber;
            grade.innerText = x.grade
            tables.appendChild(tr)
        })
    })
    .catch()

    document.getElementById('submit').addEventListener('click', (e) => {
        // e.preventDefault();
        let inputs = document.querySelectorAll('input[type="text"]');
        Array.from(inputs).map(x => {
            x.setAttribute('required', '')
        })
        let firstName = inputs[0].value;
        let secondName = inputs[1].value;
        let number = Number(inputs[2].value);
        let grade = Number(inputs[3].value);
        let url = `http://localhost:3030/jsonstore/collections/students`;
        let data = {firstName:firstName,
                    lastName:secondName,
                    facultyNumber:number,
                    grade:grade}
        fetch(url, {
            method: 'POST', // or 'PUT'
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
        
    })

}

solve()