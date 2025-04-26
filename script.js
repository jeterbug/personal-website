// script.js
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  // Toggle mobile menu
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu + smooth scroll on anchor click
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      navLinks.classList.remove('active');
    });
  });

  // IntersectionObserver for fade-in
  const faders = document.querySelectorAll('.fade-in-section');
  const obsOptions = { threshold: 0.2 };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, obsOptions);
  faders.forEach(el => observer.observe(el));
});
