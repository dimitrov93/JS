import { clear } from "./clear.js";
import { hideDiv } from "./divCloser.js";
import { displayPosts } from "./posts.js";
import { releaseForm } from "./submit.js";


displayPosts();
releaseForm();
window.addEventListener('click', find)

async function find(e) {
    
    if (e.target.tagName === 'H2') {

        let id = e.target.id
        localStorage.setItem("id", id);

    }

  
}