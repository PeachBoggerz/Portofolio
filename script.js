function toggleMode() {
  const body = document.body;
  const icon = document.getElementById('toggle-icon');
document.addEventListener('DOMContentLoaded', function() {
  function toggleMode() {
    const body = document.body;
    body.classList.toggle('sunset-mode');

  body.classList.toggle('sunset-mode');

  // Change icon depending on mode
  if (body.classList.contains('sunset-mode')) {
    icon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
  } else {
    icon.src = "https://raw.githubusercontent.com/lipis/flag-icon-css/master/flags/4x3/sun.svg";
    // Save mode preference
    localStorage.setItem('mode', body.classList.contains('sunset-mode') ? 'sunset' : 'default');
}

  // Save mode to localStorage
  localStorage.setItem('mode', body.classList.contains('sunset-mode') ? 'sunset' : 'default');
}
  // Attach click event
  document.querySelector('.toggle-btn').addEventListener('click', toggleMode);

// Load saved mode
window.onload = function() {
  // Load saved mode
const savedMode = localStorage.getItem('mode');
if (savedMode === 'sunset') {
document.body.classList.add('sunset-mode');
    document.getElementById('toggle-icon').src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
}
};
});
