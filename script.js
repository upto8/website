// Upto8 landing page — small vanilla JS, no dependencies.

document.documentElement.classList.remove('no-js');

/* ---- Rotating "Who wants to come ___?" headline ---- */
(function rotatingHeadline() {
  const words = document.querySelectorAll('.sp-words-wrapper b');
  if (!words.length) return;

  const ROTATE_EVERY_MS = 2600;   // how long each word stays on screen
  const ANIMATION_MS = 600;       // must match the slide-in/slide-out CSS animation duration

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || words.length < 2) return;

  setInterval(() => {
    const current = document.querySelector('.sp-words-wrapper b.is-visible');
    if (!current) return;

    const currentIndex = Array.prototype.indexOf.call(words, current);
    const nextIndex = (currentIndex + 1) % words.length;
    const next = words[nextIndex];

    current.classList.remove('is-visible');
    current.classList.add('is-hidden');
    next.classList.add('is-visible');

    setTimeout(() => {
      current.classList.remove('is-hidden');
    }, ANIMATION_MS);
  }, ROTATE_EVERY_MS);
})();

/* ---- Footer year ---- */
(function footerYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();
