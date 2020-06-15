let button = document.querySelector('#makeItRed');
let warningDiv = document.querySelector('#warning')
button.addEventListener('click', () => {
  warningDiv.style.backgroundColor = 'red';
})