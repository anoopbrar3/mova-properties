/* ============================================
   MOVA PROPERTIES — Main JavaScript v2
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Sticky nav shadow ───────────────────── */
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  /* ── Mobile hamburger ────────────────────── */
  const hamburger = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (nav && !nav.contains(e.target)) navLinks.classList.remove('open');
    });
  }

  /* ── Fade-up on scroll ───────────────────── */
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    fadeEls.forEach(el => observer.observe(el));
  }

  /* ── Count-up animation ──────────────────── */
  const countEls = document.querySelectorAll('[data-target]');
  if (countEls.length) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el     = entry.target;
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const dec    = el.dataset.decimal ? parseInt(el.dataset.decimal) : 0;
        const dur    = 1400;
        const step   = 16;
        const steps  = dur / step;
        let current  = 0;
        const inc    = target / steps;
        const timer  = setInterval(() => {
          current += inc;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = prefix + current.toFixed(dec) + suffix;
        }, step);
        countObserver.unobserve(el);
      });
    }, { threshold: 0.4 });
    countEls.forEach(el => countObserver.observe(el));
  }

  /* ── Project filter tabs ─────────────────── */
  const filterTabs = document.querySelectorAll('.filter-tab');
  if (filterTabs.length) {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const f = tab.dataset.filter;
        document.querySelectorAll('.p-card, .res-card').forEach(card => {
          const tags = card.dataset.category || card.dataset.tags || '';
          card.style.display = (f === 'all' || tags.includes(f)) ? '' : 'none';
        });
      });
    });
  }

  /* ── Lazy load images ────────────────────── */
  const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window && lazyImgs.length) {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imgObserver.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    lazyImgs.forEach(img => imgObserver.observe(img));
  }

});
