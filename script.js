// Portfolio Website Interaction Script
//
// Handles navigation toggling, smooth scrolling, dark‑mode switching and
// reveals sections as they enter the viewport.  This script runs after the
// DOM is ready.

document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');
  const toggleModeBtn = document.getElementById('toggle-mode');

  // Toggle the mobile navigation
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('is-active');
    // Swap the icon between menu and close when active
    const icon = menuIcon.querySelector('ion-icon');
    if (menuIcon.classList.contains('is-active')) {
      icon.setAttribute('name', 'close-outline');
    } else {
      icon.setAttribute('name', 'menu-outline');
    }
  });

  // Smooth scroll to target section and close the menu on link click
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
      navLinks.classList.remove('active');
      menuIcon.classList.remove('is-active');
    });
  });

  // Toggle dark mode by switching a class on the body
  toggleModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Intersection observer for fade‑in sections
  const fadeSections = document.querySelectorAll('.fade-in-section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  fadeSections.forEach(section => observer.observe(section));
});