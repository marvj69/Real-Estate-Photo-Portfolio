/**
 * Scroll behavior: hero parallax, navbar background, and scroll-to-contact helper.
 */

function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

(function initScrollEffects() {
  const heroBg = document.getElementById('hero-bg');
  const nav = document.getElementById('navbar');
  let latestScrollY = 0;
  let isScrollTicking = false;
  let isNavOpaque = false;

  function updateScrollEffects() {
    if (heroBg) {
      heroBg.style.transform = `translate3d(0, ${latestScrollY * 0.5}px, 0) scale(1.1)`;
    }

    const shouldBeOpaque = latestScrollY > 100;
    if (shouldBeOpaque !== isNavOpaque) {
      isNavOpaque = shouldBeOpaque;
      nav.classList.toggle('bg-black/80', shouldBeOpaque);
      nav.classList.toggle('backdrop-blur-md', shouldBeOpaque);
    }

    isScrollTicking = false;
  }

  window.addEventListener('scroll', () => {
    latestScrollY = window.pageYOffset;
    if (!isScrollTicking) {
      isScrollTicking = true;
      window.requestAnimationFrame(updateScrollEffects);
    }
  }, { passive: true });
})();
