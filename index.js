const button = document.getElementById('button-33');
const alertDiv = document.getElementById('alertDiv');
const alertCloseBtn = document.getElementById('alertClose');

button.addEventListener('click', (event) => {
    alertDiv.style.display = 'flex';
    event.stopPropagation(); 
});

document.addEventListener('click', (event) => {
    if (!alertDiv.contains(event.target) && alertDiv.style.display === 'flex') {
        alertDiv.style.display = 'none';
    }
});

alertCloseBtn.addEventListener('click', () => {
    alertDiv.style.display = 'none';
});
