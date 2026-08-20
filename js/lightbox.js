/**
 * Lightbox: open, close, and keyboard (Escape) handling.
 */

function openLightbox(src, title, location, alt) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');

  img.src = src;
  img.alt = alt || `${title} — ${location}`;
  caption.textContent = `${title} — ${location}`;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';

  document.addEventListener('keydown', handleKeydown);
}

function closeLightbox(e) {
  if (e.type === 'keydown' || e.target.id === 'lightbox' || e.target.closest('button')) {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleKeydown);
  }
}

function handleKeydown(e) {
  if (e.key === 'Escape') closeLightbox(e);
}
