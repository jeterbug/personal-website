// Dark Mode Toggle
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// Persist dark mode on reload
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
  toggle.textContent = '☀️';
}

// Fade In on Scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});