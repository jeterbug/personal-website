// script.js

document.addEventListener('DOMContentLoaded', () => {
  // 1) Mobile nav toggle
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('is-active');
    navLinks.classList.toggle('active');
  });

  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('is-active');
      }
    });
  });

  // 2) Fade-in on scroll
  const faders = document.querySelectorAll('.fade-in-section');
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // 3) AJAX contact form (Formspree)
  const form = document.getElementById('contact-form');
  const responseDiv = document.getElementById('form-response');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    responseDiv.textContent = '';
    const submitBtn = form.querySelector('button');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        responseDiv.innerHTML = `
          <p style="color:green; font-weight:600;">
            Thanks for your message! I’ll be in touch soon.
          </p>
        `;
        form.reset();
      } else {
        const json = await res.json();
        responseDiv.innerHTML = `
          <p style="color:red;">
            Oops! ${json.error || 'Something went wrong.'}
          </p>
        `;
      }
    } catch (err) {
      responseDiv.innerHTML = `
        <p style="color:red;">
          Sorry, there was a problem submitting your form.
        </p>
      `;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
});
