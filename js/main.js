/* ============================================
   MOVA PROPERTIES — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Sticky nav shadow on scroll ---- */
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  /* ---- Mobile hamburger menu ---- */
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) navLinks.classList.remove('open');
    });
  }

  /* ---- Active nav link highlighting ---- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  /* ---- Fade-up scroll animations ---- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* ---- Ticker duplication (for seamless loop) ---- */
  const tickerInner = document.querySelector('.ticker-inner');
  if (tickerInner) {
    tickerInner.innerHTML += tickerInner.innerHTML;
  }

});
