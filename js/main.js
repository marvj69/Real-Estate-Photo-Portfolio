/**
 * App entry: render gallery, observe reveal elements, smooth scroll for anchor links.
 * Depends on: renderGallery, observeElements (gallery.js).
 */

document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  observeElements();

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
