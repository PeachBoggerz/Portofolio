document.addEventListener('DOMContentLoaded', function() {
  function toggleMode() {
    const body = document.body;
    body.classList.toggle('sunset-mode');

    // Save mode preference
    localStorage.setItem('mode', body.classList.contains('sunset-mode') ? 'sunset' : 'default');
  }

  // Attach click event
  document.querySelector('.toggle-btn').addEventListener('click', toggleMode);

  // Load saved mode
  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'sunset') {
    document.body.classList.add('sunset-mode');
  }
});
