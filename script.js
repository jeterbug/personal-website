const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
menuIcon.addEventListener('click', () => navLinks.classList.toggle('active'));
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
    navLinks.classList.remove('active');
  });
});