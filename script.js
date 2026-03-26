(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 760px)').matches;

  let progress = document.querySelector('.top-progress');
  if (!progress) {
    progress = document.createElement('div');
    progress.className = 'top-progress';
    document.body.appendChild(progress);
  }

  const updateProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progress.style.width = ratio + '%';
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);

  const revealSelectors = [
    '.hero-copy',
    '.hero-panel',
    '.metric-card',
    '.spotlight-card',
    '.strength-card',
    '.timeline-item',
    '.grid-two .card',
    '.side-section',
    '.identity-card'
  ];

  const items = Array.from(document.querySelectorAll(revealSelectors.join(',')))
    .filter((el, idx, arr) => arr.indexOf(el) === idx);

  items.forEach((el, index) => {
    el.classList.add('reveal');
    if (!el.classList.contains('timeline-item')) {
      el.classList.add('hover-lift');
    }
    el.classList.add(`reveal-delay-${index % 3 + 1}`);
  });

  if (reduceMotion || isMobile || !('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.03, rootMargin: '0px 0px -6% 0px' });

  items.forEach(el => observer.observe(el));
})();
