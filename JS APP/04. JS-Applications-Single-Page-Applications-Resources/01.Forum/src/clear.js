const container = document.querySelector('.container');
const topic = container.querySelector('form')

export function clear() {
    let inputs = topic.querySelectorAll('input');
    inputs[0].value = '';
    inputs[1].value = '';
    document.getElementById('postText').value = ''
}