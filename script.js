// Dark Mode Toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  toggle.textContent = '☀️';
}
document.querySelectorAll('.fade-in-section').forEach(sec => {
  new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold:0.2 }).observe(sec);
});
