// script.js

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const opts = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, opts);

  sections.forEach(sec => observer.observe(sec));
});
