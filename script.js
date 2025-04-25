// Mobile menu toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelector('.nav-links');
mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

// Dark Mode Toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Persist dark mode
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  toggle.textContent = '☀️';
}

// Fade-in sections
document.querySelectorAll('.fade-in-section').forEach(sec => {
  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.2 }).observe(sec);
});
