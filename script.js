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


// Contact form success animation
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var form = this;
  var data = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      document.getElementById('success-message').style.display = 'block';
      form.reset();
    }
  });
});
