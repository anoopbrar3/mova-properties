/* ============================================
   MOVA PROPERTIES — Main JavaScript v3
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
    }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
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

  /* ── Section line draw-in ────────────────── */
  const lineEls = document.querySelectorAll('.line-draw');
  if (lineEls.length) {
    const lineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          lineObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    lineEls.forEach(el => lineObserver.observe(el));
  }

  /* ── Palette swatch stagger ──────────────── */
  const swatches = document.querySelectorAll('.palette-swatch');
  if (swatches.length) {
    const swatchObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const allSwatches = entry.target.closest('.palette-row')
            ?.querySelectorAll('.palette-swatch') || [entry.target];
          allSwatches.forEach((s, i) => {
            setTimeout(() => s.classList.add('visible'), i * 80);
          });
          swatchObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    swatches.forEach(el => swatchObserver.observe(el));
  }

  /* ── Progress bar animate on scroll ─────── */
  const drawBars = document.querySelectorAll('.draw-bar-animated');
  if (drawBars.length) {
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetW = bar.dataset.targetWidth || '28%';
          bar.style.setProperty('--draw-target-width', targetW);
          requestAnimationFrame(() => bar.classList.add('visible'));
          barObserver.unobserve(bar);
        }
      });
    }, { threshold: 0.5 });
    drawBars.forEach(el => barObserver.observe(el));
  }

  /* ── Construction milestone dot stagger ──── */
  const milestoneRows = document.querySelectorAll('.milestone-row');
  if (milestoneRows.length) {
    const milestoneObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const rows = entry.target.querySelectorAll('.milestone-dot');
          rows.forEach((dot, i) => {
            setTimeout(() => dot.classList.add('visible'), i * 80);
          });
          milestoneObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    milestoneRows.forEach(el => milestoneObserver.observe(el));
  }

  /* ── Arrow nudge: split → text + arrow span ─ */
  document.querySelectorAll('.btn-primary, .btn-secondary-light, .txt-link').forEach(btn => {
    const text = btn.textContent;
    if (text.includes('→')) {
      btn.innerHTML = text.replace('→', '<span class="btn-arrow">→</span>');
    }
  });

});
