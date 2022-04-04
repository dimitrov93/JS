import { html,render } from "../node_modules/lit-html/lit-html.js";

const url = 'http://localhost:3030/jsonstore/advanced/table';

async function getData() {
   let result = await fetch(url)
   return result.json();
}

const tbody = document.querySelector('tbody');
const options = Object.values(await getData())


const template = (data) => html`
            
               ${data.map(x => html`
               <tr>
               <td>${x.firstName} ${x.lastName}</td>
               <td>${x.email}</td>
                <td>${x.course}</td>
                </tr> 
               `)}
`;

update(options)

function update(options) {
   const result = template(options);
   render(result, tbody)
}




function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
 
   function onClick() {
      document.querySelectorAll('tr').forEach(x => {
         x.classList.remove('select')
      })
      let input = document.getElementById('searchField').value;

      if (input !== '') {
         let trs = document.querySelectorAll('tr td')
         trs.forEach(x => {
            
            if (x.textContent.includes(input)) {
               x.parentNode.className = 'select';
            } 
         })
      }
      document.getElementById('searchField').value = ''

   }
}

solve();