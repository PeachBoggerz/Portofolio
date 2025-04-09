const toggleButton = document.querySelector('.toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
