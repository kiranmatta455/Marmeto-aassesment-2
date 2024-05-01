const sizeButton = document.querySelector('.size-button');
const sizeDropdown = document.querySelector('.size-dropdown');
sizeButton.addEventListener('click', () => {
    sizeDropdown.classList.toggle('active');
});
document.addEventListener('click', (event) => {
    if (!event.target.closest('.size-container')) {
        sizeDropdown.classList.remove('active');
    }
});
