document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  // Toggle mobile menu + animate icon
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('is-active');
  });

  // Close menu + smooth scroll on link click
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      navLinks.classList.remove('active');
      menuIcon.classList.remove('is-active');
    });
  });

  // Fade-in observer
  const faders = document.querySelectorAll('.fade-in-section');
  const obs = new IntersectionObserver((entries, obsr) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obsr.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  faders.forEach(el => obs.observe(el));
});
