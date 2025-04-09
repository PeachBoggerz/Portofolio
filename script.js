function toggleMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Load mode on page load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}
