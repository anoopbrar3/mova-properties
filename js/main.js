/* ============================================
   MOVA PROPERTIES — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile hamburger menu ---- */
  const nav      = document.querySelector('.nav');
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (nav && !nav.contains(e.target)) navLinks.classList.remove('open');
    });
  }

});
