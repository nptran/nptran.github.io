(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // top progress
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

  // choose elements to reveal without changing layout/styling
  const selectors = [
    'section',
    '.section',
    '.card',
    '.panel',
    '.timeline-item',
    '.experience-item',
    '.project-item',
    '.skill-item',
    '.tag',
    '.hero',
    '.sidebar',
    '.main',
    '.content-block'
  ];

  const items = Array.from(document.querySelectorAll(selectors.join(',')))
    .filter((el, idx, arr) => arr.indexOf(el) === idx);

  items.forEach((el, index) => {
    el.classList.add('reveal');
    el.classList.add('hover-lift');
    el.classList.add(`reveal-delay-${index % 3 + 1}`);
  });

  if (reduceMotion) {
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
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  items.forEach(el => observer.observe(el));
})();
