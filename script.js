// Smooth scroll for scroll-down link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

faders.forEach(fader => {
  observer.observe(fader);
});

// Dark mode toggle
const darkModeButton = document.getElementById('dark-mode-toggle');
darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
