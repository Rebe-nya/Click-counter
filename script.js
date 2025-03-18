let counter = 0;

const numOutput = document.querySelector('#numOutput');
const btnClick = document.querySelector('#btnClick');
const btnReset = document.querySelector('#btnReset');

numOutput.textContent = counter;

btnClick.addEventListener('click', () => {
    counter++;
    numOutput.textContent = counter;
});

btnReset.addEventListener('click', () => {
    counter = 0;
    numOutput.textContent = counter;
});