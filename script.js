// Dark Mode Toggle
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// Persist dark mode on load
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
  toggle.textContent = '☀️';
}

// Fade-in sections on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));
