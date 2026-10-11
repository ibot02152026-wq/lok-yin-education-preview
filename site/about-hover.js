const hero = document.querySelector('[data-watercolor]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let frame = 0;

function resetArtwork() {
  cancelAnimationFrame(frame);
  hero.style.setProperty('--art-x', '0px');
  hero.style.setProperty('--art-y', '0px');
  hero.style.setProperty('--text-x', '0px');
  hero.style.setProperty('--text-y', '0px');
  hero.classList.remove('art-active');
}

hero.addEventListener('pointermove', event => {
  if (reducedMotion.matches || event.pointerType !== 'mouse') return;
  const bounds = hero.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 44;
  const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 28;
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(() => {
    hero.style.setProperty('--art-x', `${x.toFixed(2)}px`);
    hero.style.setProperty('--art-y', `${y.toFixed(2)}px`);
    hero.style.setProperty('--text-x', `${(-x * .16).toFixed(2)}px`);
    hero.style.setProperty('--text-y', `${(-y * .16).toFixed(2)}px`);
    hero.classList.add('art-active');
  });
});
hero.addEventListener('pointerleave', resetArtwork);
reducedMotion.addEventListener('change', resetArtwork);
