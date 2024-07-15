const menuA = document.querySelector('.drop');
const burg = document.querySelector('.burg');

function toggleM() {
    menuA.classList.toggle('dropH');
}

burg.addEventListener('click', toggleM);