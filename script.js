// Portfolio: small progressive-enhancement script (no dependencies)
(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // mobile navigation
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // reveal on scroll
  const revealTargets = document.querySelectorAll(
    '.section-head, .card, .metric, .doc-group, .contact-card, .diagram-card'
  );
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    revealTargets.forEach((el) => el.classList.add('reveal'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    revealTargets.forEach((el) => io.observe(el));
  }

  // diagram lightbox
  const dialog = document.getElementById('lightbox');
  const dialogImg = document.getElementById('lightbox-img');
  if (dialog && dialogImg) {
    document.querySelectorAll('.diagram').forEach((btn) => {
      btn.addEventListener('click', () => {
        const full = btn.getAttribute('data-full');
        const img = btn.querySelector('img');
        if (!full) return;
        dialogImg.src = full;
        dialogImg.alt = img ? img.alt : '';
        dialog.showModal();
      });
    });
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
    const closeBtn = dialog.querySelector('.lightbox-close');
    if (closeBtn) closeBtn.addEventListener('click', () => dialog.close());
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && dialog.open) dialog.close();
    });
  }
})();
