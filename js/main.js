/**
 * App entry: render gallery, observe reveal elements, smooth scroll for anchor links.
 * Depends on: renderGallery, observeElements (gallery.js).
 */

document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  observeElements();

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
