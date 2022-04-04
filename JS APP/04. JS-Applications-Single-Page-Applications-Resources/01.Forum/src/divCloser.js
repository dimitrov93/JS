export function hideDiv() {
    let divs = document.querySelectorAll('.container div');
    divs.forEach(x => x.style.display = 'none')
}