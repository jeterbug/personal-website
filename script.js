// Dark Mode Toggle
const toggle = document.getElementById('darkModeToggle');
const body = document.body;
toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
  toggle.textContent = '☀️';
}
// Fade-in sections
document.querySelectorAll('.fade-in-section').forEach(sec => {
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold:0.2 }).observe(sec);
});
