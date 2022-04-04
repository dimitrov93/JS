import { addComment, renderComments, viewPost } from "./postView.js";

viewPost()
renderComments();

window.addEventListener('click', (e) => {

    if (e.target.textContent === 'Post') {
        addComment();
    }
})
