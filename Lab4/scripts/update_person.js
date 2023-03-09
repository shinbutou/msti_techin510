const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
    const name = prompt('Please enter a new name');
    para.textContent = `${name}, `;
}
